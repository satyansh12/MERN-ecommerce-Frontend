export function fetchLoggedInUserOrders() {
  return new Promise(async (resolve) =>{
    const response = await fetch(`https://mern-ecommerce-backend-ink2.onrender.com/orders/own/`)
    const data = await response.json()
    resolve({data})
  }
  );
}


export function fetchLoggedInUser() {
  return new Promise(async (resolve) =>{
    const response = await fetch(`https://mern-ecommerce-backend-ink2.onrender.com/users/own`)
    const data = await response.json()
    resolve({data})
  }
  );
}

export function updateUser(update) {
  return new Promise(async (resolve) => {
    const response = await fetch(`https://mern-ecommerce-backend-ink2.onrender.com/users/`+update.id, {
      method: 'PATCH',
      body: JSON.stringify(update),
      headers: { 'content-type': 'application/json' },
    });
    const data = await response.json();
    resolve({ data });
  });
}


