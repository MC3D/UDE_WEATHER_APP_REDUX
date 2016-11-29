# WEATHER FORECAST APP (US CITIES ONLY)

A 5-day weather forecast app built using react and redux

## NOTES

actions flow through middleware; middleware can modify actions

middleware is a function that an action passes through before hitting reducer

axios is a library for handling ajax requests

redux-promise is a middleware; it looks at the payload property of an action, and if the payload is a promise, it stops the action and
dispatches a new action of the same type but with the payload of the resolved request (it unwraps the promise)
