import React from "react";

const BaseURL = `https://arcane-lake-92744.herokuapp.com/api/`;

//Register user
export const registerUser = async (username, password) => {
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

    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
};

//Login user
export const loginUser = async (username, password) => {
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
    console.log(result);

    return result;
  } catch (error) {
    console.error(error);
  }
};

export const getAllActivities = async () => {
  try {
    const response = await fetch(`${BaseURL}activities`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const createNewActivity = async (name, description, token) => {
  try {
    const response = await fetch(`${BaseURL}activities`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name,
        description,
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const editActivity = async (activityId, description, token) => {
  try {
    const response = await fetch(`${BaseURL}activities/${activityId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        description,
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const getAllRoutines = async () => {
  try {
    const response = await fetch(`${BaseURL}routines`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const createRoutine = async (name, goal, isPublic, token) => {
  try {
    const response = await fetch(`${BaseURL}routines`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name,
        goal,
        isPublic,
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const editRoutine = async (name, goal, isPublic, token, routineId) => {
  try {
    const response = await fetch(`${BaseURL}routines/${routineId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name,
        goal,
        isPublic,
      }),
    });
    const result = await response.json();
    console.log(result, "new Result");
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const deleteRoutine = async (token, routineId) => {
try {
  const response = await fetch(`${BaseURL}routines/${routineId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    })
  ;
  const result = await response.json();
  return result
} catch (error) {
  console.error(error)
}
}