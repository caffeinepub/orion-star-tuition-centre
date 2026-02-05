import List "mo:core/List";
import Nat "mo:core/Nat";
import Time "mo:core/Time";
import Iter "mo:core/Iter";
import Map "mo:core/Map";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";
import Principal "mo:core/Principal";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  // User Profile Type
  public type UserProfile = {
    name : Text;
  };

  let userProfiles = Map.empty<Principal, UserProfile>();

  // User Profile Management Functions
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  // Enquiry System
  type Enquiry = {
    id : Nat;
    timestamp : Int;
    studentName : Text;
    parentName : Text;
    classGrade : Text;
    contactInfo : Text;
    message : Text;
  };

  module Enquiry {
    public func compareByTimestamp(a : Enquiry, b : Enquiry) : Order.Order {
      Int.compare(b.timestamp, a.timestamp); // Descending order
    };
  };

  let enquiries = Map.empty<Nat, Enquiry>();
  var nextId = 0;

  // Public contact form - no authorization required (accessible to guests)
  public shared ({ caller }) func submitEnquiry(studentName : Text, parentName : Text, classGrade : Text, contactInfo : Text, message : Text) : async Nat {
    let enquiry : Enquiry = {
      id = nextId;
      timestamp = Time.now();
      studentName;
      parentName;
      classGrade;
      contactInfo;
      message;
    };

    enquiries.add(nextId, enquiry);
    nextId += 1;

    enquiry.id;
  };

  // Admin-only: View all enquiries
  public query ({ caller }) func getAllEnquiries() : async [Enquiry] {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can view enquiries");
    };

    enquiries.values().toArray().sort(Enquiry.compareByTimestamp);
  };

  // Admin-only: Delete enquiry
  public shared ({ caller }) func deleteEnquiry(id : Nat) : async () {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can delete enquiries");
    };

    if (not enquiries.containsKey(id)) {
      Runtime.trap("Enquiry not found");
    };

    enquiries.remove(id);
  };

  // Admin-only: Get enquiry count
  public query ({ caller }) func getEnquiryCount() : async Nat {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can view enquiry count");
    };

    enquiries.size();
  };

  // Admin-only: Get paginated enquiries
  public query ({ caller }) func getEnquiriesPaginated(page : Nat, pageSize : Nat) : async [Enquiry] {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can view paginated enquiries");
    };

    let offset = page * pageSize;
    let allEnquiries = enquiries.values().toArray().sort(Enquiry.compareByTimestamp);
    let totalEnquiries = allEnquiries.size();

    let paginatedEnquiries = List.empty<Enquiry>();
    for (i in Nat.range(0, pageSize)) {
      let index = offset + i;
      if (index < totalEnquiries) {
        let allEnquiriesArray = allEnquiries;
        paginatedEnquiries.add(allEnquiriesArray[index]);
      };
    };

    paginatedEnquiries.reverse().toArray();
  };
};
