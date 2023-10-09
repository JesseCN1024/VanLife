export async function getVans(url){
    const res = await fetch(url);
    // Checking if the request is good to go
    if (!res.ok){
        // Throw errow and log into the console
        throw  {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
    }

    const data = await res.json();
    return data.vans;
}

export async function loginUser(creds) {
  const res = await fetch("/api/login", {
    method: "post",
    body: JSON.stringify(creds),
  });

  const data = await res.json();
  if (!res.ok) {
    throw  {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    };
    // throw new Error('Failed to login!')
  }

  return data;
}