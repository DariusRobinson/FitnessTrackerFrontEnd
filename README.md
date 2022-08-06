# FitnessTrackerFrontEnd
Routes to still make:



GET /api/activities/:activityId/routines
-no parameters
EC!
<!-- 
POST /api/routines/:routineId/activities
-activityId (number): This is the database identifier for the activity
-count (number): This is the number of times (reps) this activity should be performed for this routine.
-duration (number): This is how long (in minutes) this activity should be performed for this routine. -->

PATCH /api/routine_activities/:routineActivityId
-count (number, optional): This is the number of times (reps) this activity should be performed for this routine.
-duration (number, optional): This is how long (in minutes) this activity should be performed for this routine.

<!-- DELETE /api/routine_activities/:routineActivityId
-no parameters -->
