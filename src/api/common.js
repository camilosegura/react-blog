export const api = 'http://localhost:3001';

let token = window.localStorage.token || Math.random().toString(36).substr(-8);

window.localStorage.token = token;


export const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export const POST = 'POST';

export const GET = 'GET';

export const DELETE = 'DELETE';

export const PUT = 'PUT';
