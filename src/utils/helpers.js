//
//
// function handleLogin() {
//   return new Promise((res) => {
//     setIsRegistered(true);
//     res();
//   }).catch((err) => console.log(`Error..... ${err}`));
// }
//
// function handleLogout() {
//   return new Promise((res) => {
//     setIsRegistered(false);
//     res();
//   })
//     .then(() => {
//       localStorage.removeItem("token");
//       localStorage.removeItem("localEmail");
//     })
//     .then(() => {
//       navigate("/signin", { replace: true });
//     })
//     .catch((err) => console.log(`Error..... ${err}`));
// }
//
// function handleInputEmail(e) {
//   e.preventDefault();
//   setEmail(e.target.value);
// }
//
// function handleInputPassword(e) {
//   e.preventDefault();
//   setPassword(e.target.value);
// }
//
// function handleSetRegistration() {
//   setIsRegistered(true);
// }
//
// function handleOpenHamburgerMenu() {
//   setIsHamburgerMenuOpen(true);
// }
//
// function closeAllPopups() {
//   setIsHamburgerMenuOpen(false);
// }
//
