import React from "react";

const BaseURL = `https://arcane-lake-92744.herokuapp.com/api/`;

//Register user
export const register = async (username, password) => {
  try {
    const response = await fetch(`${BaseURL}users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};

//Login user
export const login = async (username, password) => {
  try {
    const response = await fetch(`${BaseURL}users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};
