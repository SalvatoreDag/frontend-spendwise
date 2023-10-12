import axios from "axios";

////component that contains all the api

const api = axios.create({
  baseURL: "https://expense-api.000webhostapp.com/api",
});

//call to get user data
export const getUser = (data) => {
  return axios.get('/user', {
    headers: {
      Authorization: `Bearer ${data.token}`
    }
  })
}

//call to login
export const login = (credentials) => {
  return axios.post("/login", credentials);
};

//call to registration
export const registration = (credentials) => {
  return axios.post("/register", credentials);
};

//call to logout
export const logout = (userData) => {
  return axios.post("/logout", userData, {
    headers: {
      Authorization: `Bearer ${userData}`,
    },
  });
};

//call to get expenses
export const expensesByMonth = (data) => {
  return axios.get("/expenses", {
    headers: {
      Authorization: `Bearer ${data.accessToken}`,
    },
    params: {
      "filter[month]": data.selectedMonthName,
    },
  });
};

//call to delete an expense
export const destroyExpenses = async (data) => {
  const id = data.id;
  return axios.delete(`/expenses/${id}`, {
    headers: {
      Authorization: `Bearer ${data.accessToken}`,
    },
  });
};

//call to update an expense
export const updateExpenses =  (data) => {
  const { id, accessToken, ...rest } = data;

   return axios.put(`/expenses/${id}`, rest, {
     headers: {
       Authorization: `Bearer ${accessToken}`,
     },
   });
};

//call to create an expense
export const storeExpenses = (data) => {

  const { accessToken, ...rest } = data;

  return axios.post("/expenses/", rest, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
