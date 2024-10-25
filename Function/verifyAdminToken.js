export default function () {
    return new Promise((resolve) => {
    let token = sessionStorage.getItem("token");
    if (!token) resolve(false);
    fetch(`${window.location.origin}/api/login`, {
      method: "GET",
      headers: {token}
    }).then(res => res.json())
    .then(res => resolve(res.done));
  });
}
