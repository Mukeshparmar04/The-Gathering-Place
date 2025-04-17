// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// const Members = ({ showSidebar }) => {
//   const [isMobileView, setIsMobileView] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(() => {
//     return localStorage.getItem("isLoggedIn") === "true";
//   });
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredMembers, setFilteredMembers] = useState([]);
//   const [allMembers, setAllMembers] = useState([
//     {
//       name: "Mukesh Parmar",
//       email: "mukeshpiploda2002@gmail.com",
//       role: "Admin",
//       img: "pp.jpg",
//     },
//     {
//       name: "Raya Clarke",
//       email: "raya@acme.com",
//       role: "Admin",
//       img: "user-profil2.jpg",
//     },
//     {
//       name: "Jessica Taylor",
//       email: "jessica.t@acme.com",
//       role: "Member",
//       img: "user-profil2.jpg",
//     },
//     {
//       name: "Nathan Foster",
//       email: "nathan.f@acme.com",
//       role: "Member",
//       img: "user-profil1.jpg",
//     },
//     {
//       name: "Catherine Reynolds",
//       email: "catherine@acme.com",
//       role: "Member",
//       img: "user-profil2.jpg",
//     },
//     {
//       name: "Olivia Knight",
//       email: "jonathan.m@acme.com",
//       role: "Member",
//       img: "user-profil2.jpg",
//     },
//     {
//       name: "Anna Deo",
//       email: "anna@acme.com",
//       role: "Member",
//       img: "user-profil2.jpg",
//     },
//     {
//       name: "Samuel Hayes",
//       email: "samuel.h@acme.com",
//       role: "Member",
//       img: "user-profil1.jpg",
//     },
//     {
//       name: "Grace Spencer",
//       email: "grace@acme.com",
//       role: "Member",
//       img: "user-profil1.jpg",
//     },
//     {
//       name: "Alexander Davidson",
//       email: "alexander@acme.com",
//       role: "Member",
//       img: "user-profil1.jpg",
//     },
//     {
//       name: "Emma Brown",
//       email: "emma.b@acme.com",
//       role: "Member",
//       img: "user-profil2.jpg",
//     },
//   ]);
//   const [showAddMemberForm, setShowAddMemberForm] = useState(false);
//   const [newMember, setNewMember] = useState({
//     name: "",
//     email: "",
//     role: "Member",
//     img: "user-profil1.jpg",
//   });
//   const [searchTermInvite, setSearchTermInvite] = useState("");
//   const [inviteList, setInviteList] = useState([
//     {
//       name: "Anna Jhon",
//       email: "janna@acme.com",
//       role: "Invitation pending",
//       img: "user-profil2.jpg",
//     },
//     {
//       name: "Emliy Brown",
//       email: "emma.b@acme.com",
//       role: "Invitation pending",
//       img: "user-profil2.jpg",
//     },
//   ]);
//   const [filteredInvites, setFilteredInvites] = useState(inviteList);
//   const [editingMemberIndex, setEditingMemberIndex] = useState(null);
//   const [editedMember, setEditedMember] = useState({
//     name: "",
//     email: "",
//     role: "Member",
//     img: "user-profil1.jpg",
//   });

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobileView(window.innerWidth < 768);
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("isLoggedIn", isLoggedIn ? "true" : "false");
//   }, [isLoggedIn]);

//   useEffect(() => {
//     let yOffset1 = 0;
//     let yOffset2 = 0;
//     let yOffset3 = 110;
//     let yOffset4 = -170;
//     let yOffset5 = 370;
//     let yOffset6 = 0;

//     const intervalId = setInterval(() => {
//       yOffset1 += 1;
//       yOffset2 += 1;
//       yOffset3 += 1;
//       yOffset4 += 1;
//       yOffset5 += 1;
//       yOffset6 += 1;

//       document.body.style.setProperty("--y-offset-1", `${yOffset1}px`);
//       document.body.style.setProperty("--y-offset-2", `${yOffset2}px`);
//       document.body.style.setProperty("--y-offset-3", `${yOffset3}px`);
//       document.body.style.setProperty("--y-offset-4", `${yOffset4}px`);
//       document.body.style.setProperty("--y-offset-5", `${yOffset5}px`);
//       document.body.style.setProperty("--y-offset-6", `${yOffset6}px`);
//     }, 100);

//     return () => clearInterval(intervalId);
//   }, []);

//   useEffect(() => {
//     const results = allMembers.filter((member) =>
//       member.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredMembers(results);
//   }, [searchTerm, allMembers]);

//   useEffect(() => {
//     const resultsInvites = inviteList.filter((invite) =>
//       invite.name.toLowerCase().includes(searchTermInvite.toLowerCase())
//     );
//     setFilteredInvites(resultsInvites);
//   }, [searchTermInvite, inviteList]);

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleAddMemberClick = () => {
//     setShowAddMemberForm(true);
//   };

//   const handleNewMemberChange = (e) => {
//     setNewMember({ ...newMember, [e.target.name]: e.target.value });
//   };

//   const handleAddMemberSubmit = (e) => {
//     e.preventDefault();

//     const isMemberPresent = allMembers.some(
//       (member) => member.email === newMember.email
//     );

//     if (!isMemberPresent) {
//       setAllMembers([...allMembers, newMember]);
//       setShowAddMemberForm(false);
//       setNewMember({
//         name: "",
//         email: "",
//         role: "Member",
//         img: "user-profil1.jpg",
//       });
//     } else {
//       alert("Member with this email already exists.");
//     }
//   };

//   const handleSearchInviteChange = (e) => {
//     setSearchTermInvite(e.target.value);
//   };

//   const handleEditMember = (index) => {
//     setEditingMemberIndex(index);
//     setEditedMember({ ...filteredMembers[index] });
//   };

//   const handleEditedMemberChange = (e) => {
//     setEditedMember({ ...editedMember, [e.target.name]: e.target.value });
//   };

//   const handleSaveEdit = () => {
//     const updatedMembers = [...allMembers];
//     updatedMembers[
//       allMembers.findIndex((m) => m.email === filteredMembers[editingMemberIndex].email)
//     ] = editedMember;
//     setAllMembers(updatedMembers);
//     setEditingMemberIndex(null);
//   };

//   const handleInvitationAction = (index, action) => {
//     if (action === "Confirm") {
//       const confirmedInvite = { ...filteredInvites[index] };
//       confirmedInvite.role = "Member"; // Set role to Member
//       setAllMembers([...allMembers, confirmedInvite]); // Add to members list
//       const updatedInvites = [...inviteList];
//       updatedInvites.splice(
//         inviteList.findIndex((invite) => invite.email === filteredInvites[index].email),
//         1
//       ); // Remove from invite list
//       setInviteList(updatedInvites);
//     } else if (action === "Cancel") {
//       const updatedInvites = [...inviteList];
//       updatedInvites.splice(
//         inviteList.findIndex((invite) => invite.email === filteredInvites[index].email),
//         1
//       ); // Remove from invite list
//       setInviteList(updatedInvites);
//     }
//   };

//   return (
//     <main className="background-animation">
//       <div className="d-flex flex-column flex-lg-row">
//         {showSidebar && (
//           <div className="shadow sidebar px-4">
//             <div className="p-4 d-flex flex-column align-items-center">
//               <div className="d-flex justify-content-center rounded ">
//                 <img
//                   alt="Connect Locally, Live Globally"
//                   className="mx-auto mb-2 rounded-circle"
//                   height="150"
//                   src="logo.svg"
//                   width="150"
//                 />
//               </div>
//             </div>
//             <div className="mt-2 fw-bold text-center text-lg-start">
//               <Link
//                 className="d-flex flex-column flex-lg-row align-items-center p-2 text-dark"
//                 to="/"
//               >
//                 <i className="fa-solid fa-house"></i>
//                 <span className="ms-2">Dashboard</span>
//               </Link>
//               <Link
//                 className="d-flex flex-column flex-lg-row align-items-center p-2 text-dark"
//                 to="/upcoming-events"
//               >
//                 <i className="fa-solid fa-calendar-days"></i>
//                 <span className="ms-2">Upcoming Events</span>
//               </Link>

//               <div className="mt-4 user-profile">
//                 <h6 className="text-muted fw-bold text-uppercase px-2">
//                   Others
//                 </h6>

//                 {/* {isLoggedIn && (
//                   <Link
//                     id="userProfile"
//                     className="d-flex flex-column flex-lg-row align-items-center p-2 text-dark"
//                     to="/userprofile"
//                   >
//                     <i className="fa-solid fa-user"></i>
//                     <span className="ms-2">User Profile</span>
//                   </Link>
//                 )} */}

//                 {isLoggedIn && (
//                   <Link
//                     id="members"
//                     className="d-flex flex-column flex-lg-row align-items-center p-2 text-dark"
//                     to="/members"
//                   >
//                     <i className="fa-solid fa-users"></i>
//                     <span className="ms-2">Members</span>
//                   </Link>
//                 )}

//                 <Link
//                   id="donation"
//                   className="d-flex flex-column flex-lg-row align-items-center p-2 text-dark"
//                   to="/donation"
//                 >
//                   <i className="fa-solid fa-hand-holding-dollar"></i>
//                   <span className="ms-2">Donation</span>
//                 </Link>
//                 <Link
//                   className="d-flex flex-column flex-lg-row align-items-center p-2 text-dark"
//                   to="#"
//                 >
//                   <i className="fas fa-lock"></i>
//                   <span className="ms-2">Authentication</span>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         )}

//         <div className="main-content p-4 w-100">
//           <div className="container shadow-lg p-4 rounded-5">
//             <div className="row">
//               <div className="col-12">
//                 <div className="p-4">
//                   <div className="main-content ">
//                     <h2 className="fw-bold">Members</h2>
//                   </div>
//                   <div className="p-2 fw-bold rounded shadow-lg">
//                     <div className="d-flex justify-content-between align-items-center mb-4 shadow-lg ">
//                       <div className="d-flex justify-content-between align-items-center w-100 px-2 ">
//                         <span className="">
//                           {filteredMembers.length} members
//                         </span>
//                         <div className="position-relative px-2 w-50 py-2 ">
//                           <input
//                             className="form-control rounded py-2 px-4 bg-transparent"
//                             placeholder="Search"
//                             type="text"
//                             value={searchTerm}
//                             onChange={handleSearchChange}
//                           />
//                           <i className="fas fa-search position-absolute top-50 translate-middle-y end-3 text-muted ms-1"></i>
//                         </div>
//                         <button
//                           className="btn btn-primary rounded"
//                           onClick={handleAddMemberClick}
//                         >
//                           + Add member
//                         </button>
//                       </div>
//                     </div>
//                     {showAddMemberForm && (
//                       <div className="mb-4 shadow-lg p-3 rounded ">
//                         <h5 className="fw-bold">Add New Member</h5>
//                         <form
//                           className="d-flex justify-content-between align-items-center mb-4 shadow-lg"
//                           onSubmit={handleAddMemberSubmit}
//                         >
//                           <div className="d-flex justify-content-between align-items-center w-100 px-2 ">
//                             <div className="d-flex  position-relative  px-2 w-100 py-2 my-2 ">
//                               <input
//                                 className="form-control rounded py-2 px-4 m-2 bg-transparent "
//                                 type="text"
//                                 name="name"
//                                 placeholder="Name"
//                                 value={newMember.name}
//                                 onChange={handleNewMemberChange}
//                                 required
//                               />

//                               <input
//                                 className="form-control rounded py-2 px-4 my-2 bg-transparent "
//                                 type="email"
//                                 name="email"
//                                 placeholder="Email"
//                                 value={newMember.email}
//                                 onChange={handleNewMemberChange}
//                                 required
//                               />
//                             </div>
//                             <button
//                               className="btn btn-primary rounded"
//                               type="submit"
//                             >
//                               Add
//                             </button>
//                           </div>
//                         </form>
//                       </div>
//                     )}
//                     <div className="d-grid gap-3 w-100 mb-4">
//                       {filteredMembers.map((member, index) => (
//                         <div
//                           key={index}
//                           className="d-flex flex-column flex-md-row justify-content-between align-items-center p-3 rounded shadow-lg"
//                         >
//                           <div className="d-flex align-items-center mb-2 mb-md-0">
//                             <img
//                               alt={member.name}
//                               className="rounded-circle me-3"
//                               src={member.img}
//                               width="40"
//                               height="40"
//                             />
//                             <div>
//                               <p className="fw-semibold mb-0">{member.name}</p>
//                               <p className="text-muted mb-0">{member.email}</p>
//                             </div>
//                           </div>
//                           <div className="d-flex align-items-center mt-2 mt-md-0">
//                             <span className="bg-secondary text-white py-1 px-3 rounded">
//                               {member.role}
//                             </span>
//                             <div className="btn-group">
//                               <Link
//                                 type="button"
//                                 className=""
//                                 data-bs-toggle="dropdown"
//                                 aria-expanded="false"
//                               >
//                                 <i className="fas fa-ellipsis-v text-muted ms-3 shadow-lg"></i>
//                               </Link>
//                               <ul className="dropdown-menu" name="member-action-dropdown">
//                                 <li>
//                                   <button
//                                     className="dropdown-item fw-bold"
//                                     onClick={() => handleEditMember(index)}
//                                   >
//                                     Modify
//                                   </button>
//                                 </li>
//                                 <li>
//                                   <Link className="dropdown-item fw-bold" to="#">
//                                     Delete
//                                   </Link>
//                                 </li>
//                                 <li>
//                                   <Link className="dropdown-item fw-bold" to="/userprofile">
//                                     View User Info
//                                   </Link>
//                                 </li>
//                                 <li>
//                                   <hr className="dropdown-divider" />
//                                 </li>
//                                 <li>
//                                   <Link className="dropdown-item fw-bold" to="#">
//                                     Access Rights
//                                   </Link>
//                                 </li>
//                               </ul>
//                             </div>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                     {editingMemberIndex !== null && (
//                       <div className="mb-4 shadow-lg p-3 rounded">
//                         <h5 className="fw-bold">Edit Member</h5>
//                         <form
//                           className="d-flex justify-content-between align-items-center mb-4 shadow-lg"
//                           onSubmit={handleSaveEdit}
//                         >
//                           <div className="d-flex justify-content-between align-items-center w-100 px-2 ">
//                             <div className="d-flex  position-relative  px-2 w-100 py-2 my-2 ">
//                               <input
//                                 className="form-control rounded py-2 px-4 m-2 bg-transparent "
//                                 type="text"
//                                 name="name"
//                                 placeholder="Name"
//                                 value={editedMember.name}
//                                 onChange={handleEditedMemberChange}
//                                 required
//                               />
//                               <input
//                                 className="form-control rounded py-2 px-4 my-2 bg-transparent "
//                                 type="email"
//                                 name="email"
//                                 placeholder="Email"
//                                 value={editedMember.email}
//                                 onChange={handleEditedMemberChange}
//                                 required
//                               />
//                             </div>
//                             <button
//                               className="btn btn-primary rounded"
//                               type="submit"
//                             >
//                               Save
//                             </button>
//                           </div>
//                         </form>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>

//               <div className="col-12">
//                 <div className="p-4">
//                   <div className="main-content ">
//                     <h2 className="fw-bold">Invitations</h2>
//                   </div>
//                   <div className="p-2 fw-bold rounded shadow-lg">
//                     <div className="d-flex justify-content-between align-items-center mb-4 shadow-lg ">
//                       <div className="d-flex justify-content-between align-items-center w-100 px-2 ">
//                         <span className="">{filteredInvites.length} Invitations</span>
//                         <div className="position-relative px-2 w-50 py-2 ">
//                           <input
//                             className="form-control rounded py-2 px-4 bg-transparent"
//                             placeholder="Search"
//                             type="text"
//                             name="searchTermInvite"
//                             onChange={handleSearchInviteChange}
//                           />
//                           <i className="fas fa-search position-absolute top-50 translate-middle-y end-3 text-muted ms-1"></i>
//                         </div>
//                       </div>
//                     </div>
//                     {filteredInvites.map((invite, index) => (
//                       <div
//                         key={index}
//                         className="d-flex flex-column flex-md-row justify-content-between align-items-center p-3 rounded shadow-lg"
//                       >
//                         <div className="d-flex align-items-center mb-2 mb-md-0">
//                           <img
//                             alt={invite.name}
//                             className="rounded-circle me-3"
//                             src={invite.img}
//                             width="40"
//                             height="40"
//                           />
//                           <div>
//                             <p className="fw-semibold mb-0">{invite.name}</p>
//                             <p className="text-muted mb-0">{invite.email}</p>
//                           </div>
//                         </div>
//                         <div className="d-flex align-items-center mt-2 mt-md-0">
//                           <span className="bg-secondary text-white py-1 px-3 rounded">
//                             <div className="btn-group" name="invite-role-dropdown">
//                               <Link
//                                 type="button"
//                                 className="text-decoration-none text-white"
//                                 data-bs-toggle="dropdown"
//                                 aria-expanded="false"
//                               >
//                                 {invite.role}
//                               </Link>
//                               <ul className="dropdown-menu">
//                                 <li>
//                                   <Link
//                                     className="dropdown-item fw-bold"
//                                     onClick={() => handleInvitationAction(index, "Cancel")}
//                                   >
//                                     Cancel
//                                   </Link>
//                                 </li>
//                                 <li>
//                                   <Link
//                                     className="dropdown-item fw-bold"
//                                     onClick={() => handleInvitationAction(index, "Confirm")}
//                                   >
//                                     Confirm
//                                   </Link>
//                                 </li>
//                               </ul>
//                             </div>
//                           </span>
//                           <div className="btn-group">
//                             <Link
//                               type="button"
//                               className=""
//                               data-bs-toggle="dropdown"
//                               aria-expanded="false"
//                             >
//                               <i className="fas fa-ellipsis-v text-muted ms-3 shadow-lg"></i>
//                             </Link>
//                             <ul className={`dropdown-menu`}>
//                               <li>
//                                 <Link className="dropdown-item" to="#">
//                                   Modify
//                                 </Link>
//                               </li>
//                               <li>
//                                 <Link className="dropdown-item" to="#">
//                                   Delete
//                                 </Link>
//                               </li>
//                               <li>
//                                 <Link className="dropdown-item" to="#">
//                                   View User Info
//                                 </Link>
//                               </li>
//                               <li>
//                                 <hr className="dropdown-divider" />
//                               </li>
//                               <li>
//                                 <Link className="dropdown-item" to="#">
//                                   Access Rights
//                                 </Link>
//                               </li>
//                             </ul>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Members;


import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Members = ({ showSidebar }) => {
  const [isMobileView, setIsMobileView] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMembers, setFilteredMembers] = useState([]);
  const [allMembers, setAllMembers] = useState([
    {
      name: "Mukesh Parmar",
      email: "mukeshpiploda2002@gmail.com",
      role: "Admin",
      img: "pp.jpg",
    },
    {
      name: "Raya Clarke",
      email: "raya@acme.com",
      role: "Admin",
      img: "user-profil2.jpg",
    },
    {
      name: "Jessica Taylor",
      email: "jessica.t@acme.com",
      role: "Member",
      img: "user-profil2.jpg",
    },
    {
      name: "Nathan Foster",
      email: "nathan.f@acme.com",
      role: "Member",
      img: "user-profil1.jpg",
    },
    {
      name: "Catherine Reynolds",
      email: "catherine@acme.com",
      role: "Member",
      img: "user-profil2.jpg",
    },
    {
      name: "Olivia Knight",
      email: "jonathan.m@acme.com",
      role: "Member",
      img: "user-profil2.jpg",
    },
    {
      name: "Anna Deo",
      email: "anna@acme.com",
      role: "Member",
      img: "user-profil2.jpg",
    },
    {
      name: "Samuel Hayes",
      email: "samuel.h@acme.com",
      role: "Member",
      img: "user-profil1.jpg",
    },
    {
      name: "Grace Spencer",
      email: "grace@acme.com",
      role: "Member",
      img: "user-profil1.jpg",
    },
    {
      name: "Alexander Davidson",
      email: "alexander@acme.com",
      role: "Member",
      img: "user-profil1.jpg",
    },
    {
      name: "Emma Brown",
      email: "emma.b@acme.com",
      role: "Member",
      img: "user-profil2.jpg",
    },
  ]);
  const [showAddMemberForm, setShowAddMemberForm] = useState(false);
  const [newMember, setNewMember] = useState({
    name: "",
    email: "",
    role: "Member",
    img: "user-profil1.jpg",
  });
  const [searchTermInvite, setSearchTermInvite] = useState("");
  const [inviteList, setInviteList] = useState([
    {
      name: "Anna Jhon",
      email: "janna@acme.com",
      role: "Invitation pending",
      img: "user-profil2.jpg",
    },
    {
      name: "Emliy Brown",
      email: "emma.b@acme.com",
      role: "Invitation pending",
      img: "user-profil2.jpg",
    },
  ]);
  const [filteredInvites, setFilteredInvites] = useState(inviteList);
  const [editingMemberIndex, setEditingMemberIndex] = useState(null);
  const [editedMember, setEditedMember] = useState({
    name: "",
    email: "",
    role: "Member",
    img: "user-profil1.jpg",
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn ? "true" : "false");
  }, [isLoggedIn]);

  useEffect(() => {
    let yOffset1 = 0;
    let yOffset2 = 0;
    let yOffset3 = 110;
    let yOffset4 = -170;
    let yOffset5 = 370;
    let yOffset6 = 0;

    const intervalId = setInterval(() => {
      yOffset1 += 1;
      yOffset2 += 1;
      yOffset3 += 1;
      yOffset4 += 1;
      yOffset5 += 1;
      yOffset6 += 1;

      document.body.style.setProperty("--y-offset-1", `${yOffset1}px`);
      document.body.style.setProperty("--y-offset-2", `${yOffset2}px`);
      document.body.style.setProperty("--y-offset-3", `${yOffset3}px`);
      document.body.style.setProperty("--y-offset-4", `${yOffset4}px`);
      document.body.style.setProperty("--y-offset-5", `${yOffset5}px`);
      document.body.style.setProperty("--y-offset-6", `${yOffset6}px`);
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const results = allMembers.filter((member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMembers(results);
  }, [searchTerm, allMembers]);

  useEffect(() => {
    const resultsInvites = inviteList.filter((invite) =>
      invite.name.toLowerCase().includes(searchTermInvite.toLowerCase())
    );
    setFilteredInvites(resultsInvites);
  }, [searchTermInvite, inviteList]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleAddMemberClick = () => {
    setShowAddMemberForm(true);
  };

  const handleNewMemberChange = (e) => {
    setNewMember({ ...newMember, [e.target.name]: e.target.value });
  };

  const handleAddMemberSubmit = (e) => {
    e.preventDefault();

    const isMemberPresent = allMembers.some(
      (member) => member.email === newMember.email
    );

    if (!isMemberPresent) {
      setAllMembers([...allMembers, newMember]);
      setShowAddMemberForm(false);
      setNewMember({
        name: "",
        email: "",
        role: "Member",
        img: "user-profil1.jpg",
      });
    } else {
      alert("Member with this email already exists.");
    }
  };

  const handleSearchInviteChange = (e) => {
    setSearchTermInvite(e.target.value);
  };

  const handleEditMember = (index) => {
    setEditingMemberIndex(index);
    setEditedMember({ ...filteredMembers[index] });
  };

  const handleEditedMemberChange = (e) => {
    setEditedMember({ ...editedMember, [e.target.name]: e.target.value });
  };

  const handleSaveEdit = () => {
    const updatedMembers = [...allMembers];
    updatedMembers[
      allMembers.findIndex((m) => m.email === filteredMembers[editingMemberIndex].email)
    ] = editedMember;
    setAllMembers(updatedMembers);
    setEditingMemberIndex(null);
  };

  const handleInvitationAction = (index, action) => {
    if (action === "Confirm") {
      const confirmedInvite = { ...filteredInvites[index] };
      confirmedInvite.role = "Member"; // Set role to Member
      setAllMembers([...allMembers, confirmedInvite]); // Add to members list
      const updatedInvites = [...inviteList];
      updatedInvites.splice(
        inviteList.findIndex((invite) => invite.email === filteredInvites[index].email),
        1
      ); // Remove from invite list
      setInviteList(updatedInvites);
    } else if (action === "Cancel") {
      const updatedInvites = [...inviteList];
      updatedInvites.splice(
        inviteList.findIndex((invite) => invite.email === filteredInvites[index].email),
        1
      ); // Remove from invite list
      setInviteList(updatedInvites);
    }
  };

  const handleDeleteMember = (index) => {
    const memberToDelete = filteredMembers[index];
    const confirmDelete = window.confirm(
      `You want to remove ${memberToDelete.name}?`
    );

    if (confirmDelete) {
      const updatedMembers = allMembers.filter(
        (member) => member.email !== memberToDelete.email
      );
      setAllMembers(updatedMembers);
    }
  };

  return (
    <main className="background-animation">
      <div className="d-flex flex-column flex-lg-row">
        {showSidebar && (
          <div className="shadow sidebar px-4">
            <div className="p-4 d-flex flex-column align-items-center">
              <div className="d-flex justify-content-center rounded ">
                <img
                  alt="Connect Locally, Live Globally"
                  className="mx-auto mb-2 rounded-circle"
                  height="150"
                  src="logo.svg"
                  width="150"
                />
              </div>
            </div>
            <div className="mt-2 fw-bold text-center text-lg-start">
              <Link
                className="d-flex flex-column flex-lg-row align-items-center p-2 text-dark"
                to="/"
              >
                <i className="fa-solid fa-house"></i>
                <span className="ms-2">Dashboard</span>
              </Link>
              <Link
                className="d-flex flex-column flex-lg-row align-items-center p-2 text-dark"
                to="/upcoming-events"
              >
                <i className="fa-solid fa-calendar-days"></i>
                <span className="ms-2">Upcoming Events</span>
              </Link>

              <div className="mt-4 user-profile">
                <h6 className="text-muted fw-bold text-uppercase px-2">
                  Others
                </h6>

                {isLoggedIn && (
                  <Link
                    id="members"
                    className="d-flex flex-column flex-lg-row align-items-center p-2 text-dark"
                    to="/members"
                  >
                    <i className="fa-solid fa-users"></i>
                    <span className="ms-2">Members</span>
                  </Link>
                )}

                <Link
                  id="donation"
                  className="d-flex flex-column flex-lg-row align-items-center p-2 text-dark"
                  to="/donation"
                >
                  <i className="fa-solid fa-hand-holding-dollar"></i>
                  <span className="ms-2">Donation</span>
                </Link>
                <Link
                  className="d-flex flex-column flex-lg-row align-items-center p-2 text-dark"
                  to="#"
                >
                  <i className="fas fa-lock"></i>
                  <span className="ms-2">Authentication</span>
                </Link>
              </div>
            </div>
          </div>
        )}

        <div className="main-content p-4 w-100">
          <div className="container shadow-lg p-4 rounded-5">
            <div className="row">
              <div className="col-12">
                <div className="p-4">
                  <div className="main-content ">
                    <h2 className="fw-bold">Members</h2>
                  </div>
                  <div className="p-2 fw-bold rounded shadow-lg">
                    <div className="d-flex justify-content-between align-items-center mb-4 shadow-lg ">
                      <div className="d-flex justify-content-between align-items-center w-100 px-2 ">
                        <span className="">
                          {filteredMembers.length} members
                        </span>
                        <div className="position-relative px-2 w-50 py-2 ">
                          <input
                            className="form-control rounded py-2 px-4 bg-transparent"
                            placeholder="Search"
                            type="text"
                            value={searchTerm}
                            onChange={handleSearchChange}
                          />
                          <i className="fas fa-search position-absolute top-50 translate-middle-y end-3 text-muted ms-1"></i>
                        </div>
                        <button
                          className="btn btn-primary rounded"
                          onClick={handleAddMemberClick}
                        >
                          + Add member
                        </button>
                      </div>
                    </div>
                    {showAddMemberForm && (
                      <div className="mb-4 shadow-lg p-3 rounded ">
                        <h5 className="fw-bold">Add New Member</h5>
                        <form
                          className="d-flex justify-content-between align-items-center mb-4 shadow-lg"
                          onSubmit={handleAddMemberSubmit}
                        >
                          <div className="d-flex justify-content-between align-items-center w-100 px-2 ">
                            <div className="d-flex  position-relative  px-2 w-100 py-2 my-2 ">
                              <input
                                className="form-control rounded py-2 px-4 m-2 bg-transparent "
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={newMember.name}
                                onChange={handleNewMemberChange}
                                required
                              />

                              <input
                                className="form-control rounded py-2 px-4 my-2 bg-transparent "
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={newMember.email}
                                onChange={handleNewMemberChange}
                                required
                              />
                            </div>
                            <button
                              className="btn btn-primary rounded"
                              type="submit"
                            >
                              Add
                            </button>
                          </div>
                        </form>
                      </div>
                    )}
                    <div className="d-grid gap-3 w-100 mb-4">
                      {filteredMembers.map((member, index) => (
                        <div
                          key={index}
                          className="d-flex flex-column flex-md-row justify-content-between align-items-center p-3 rounded shadow-lg"
                        >
                          <div className="d-flex align-items-center mb-2 mb-md-0">
                            <img
                              alt={member.name}
                              className="rounded-circle me-3"
                              src={member.img}
                              width="40"
                              height="40"
                            />
                            <div>
                              <p className="fw-semibold mb-0">{member.name}</p>
                              <p className="text-muted mb-0">{member.email}</p>
                            </div>
                          </div>
                          <div className="d-flex align-items-center mt-2 mt-md-0">
                            <span className="bg-secondary text-white py-1 px-3 rounded">
                              {member.role}
                            </span>
                            <div className="btn-group">
                              <Link
                                type="button"
                                className=""
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="fas fa-ellipsis-v text-muted ms-3 shadow-lg"></i>
                              </Link>
                              <ul className="dropdown-menu" name="member-action-dropdown">
                                <li>
                                  <button
                                    className="dropdown-item fw-bold"
                                    onClick={() => handleEditMember(index)}
                                  >
                                    Modify
                                  </button>
                                </li>
                                <li>
                                  <button
                                    className="dropdown-item fw-bold"
                                    onClick={() => handleDeleteMember(index)}
                                  >
                                    Delete
                                  </button>
                                </li>
                                <li>
                                  <Link className="dropdown-item fw-bold" to="/userprofile">
                                    View User Info
                                  </Link>
                                </li>
                                <li>
                                  <hr className="dropdown-divider" />
                                </li>
                                <li>
                                  <Link className="dropdown-item fw-bold" to="#">
                                    Access Rights
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    {editingMemberIndex !== null && (
                      <div className="mb-4 shadow-lg p-3 rounded">
                        <h5 className="fw-bold">Edit Member</h5>
                        <form
                          className="d-flex justify-content-between align-items-center mb-4 shadow-lg"
                          onSubmit={handleSaveEdit}
                        >
                          <div className="d-flex justify-content-between align-items-center w-100 px-2 ">
                            <div className="d-flex  position-relative  px-2 w-100 py-2 my-2 ">
                              <input
                                className="form-control rounded py-2 px-4 m-2 bg-transparent "
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={editedMember.name}
                                onChange={handleEditedMemberChange}
                                required
                              />
                              <input
                                className="form-control rounded py-2 px-4 my-2 bg-transparent "
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={editedMember.email}
                                onChange={handleEditedMemberChange}
                                required
                              />
                            </div>
                            <button
                              className="btn btn-primary rounded"
                              type="submit"
                            >
                              Save
                            </button>
                          </div>
                        </form>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="col-12">
                <div className="p-4">
                  <div className="main-content ">
                    <h2 className="fw-bold">Invitations</h2>
                  </div>
                  <div className="p-2 fw-bold rounded shadow-lg">
                    <div className="d-flex justify-content-between align-items-center mb-4 shadow-lg ">
                      <div className="d-flex justify-content-between align-items-center w-100 px-2 ">
                        <span className="">{filteredInvites.length} Invitations</span>
                        <div className="position-relative px-2 w-50 py-2 ">
                          <input
                            className="form-control rounded py-2 px-4 bg-transparent"
                            placeholder="Search"
                            type="text"
                            name="searchTermInvite"
                            onChange={handleSearchInviteChange}
                          />
                          <i className="fas fa-search position-absolute top-50 translate-middle-y end-3 text-muted ms-1"></i>
                        </div>
                      </div>
                    </div>
                    {filteredInvites.map((invite, index) => (
                      <div
                        key={index}
                        className="d-flex flex-column flex-md-row justify-content-between align-items-center p-3 rounded shadow-lg"
                      >
                        <div className="d-flex align-items-center mb-2 mb-md-0">
                          <img
                            alt={invite.name}
                            className="rounded-circle me-3"
                            src={invite.img}
                            width="40"
                            height="40"
                          />
                          <div>
                            <p className="fw-semibold mb-0">{invite.name}</p>
                            <p className="text-muted mb-0">{invite.email}</p>
                          </div>
                        </div>
                        <div className="d-flex align-items-center mt-2 mt-md-0">
                          <span className="bg-secondary text-white py-1 px-3 rounded">
                            <div className="btn-group" name="invite-role-dropdown">
                              <Link
                                type="button"
                                className="text-decoration-none text-white"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                {invite.role}
                              </Link>
                              <ul className="dropdown-menu">
                                <li>
                                  <Link
                                    className="dropdown-item fw-bold"
                                    onClick={() => handleInvitationAction(index, "Cancel")}
                                  >
                                    Cancel
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="dropdown-item fw-bold"
                                    onClick={() => handleInvitationAction(index, "Confirm")}
                                  >
                                    Confirm
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </span>
                          <div className="btn-group">
                            <Link
                              type="button"
                              className=""
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="fas fa-ellipsis-v text-muted ms-3 shadow-lg"></i>
                            </Link>
                            <ul className={`dropdown-menu`}>
                              <li>
                                <Link className="dropdown-item" to="#">
                                  Modify
                                </Link>
                              </li>
                              <li>
                                <Link className="dropdown-item" to="#">
                                  Delete
                                </Link>
                              </li>
                              <li>
                                <Link className="dropdown-item" to="#">
                                  View User Info
                                </Link>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <Link className="dropdown-item" to="#">
                                  Access Rights
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Members;