# Mixpanel Implementation Guide 

_The Mixpanel full Javascript [API reference](https://developer.mixpanel.com/docs/javascript-full-api-reference) was utilized when developing the method calls and method call examples. Mixpanel also offers a complete source code [example library](https://github.com/mixpanel/mixpanel-js)._

### RSC Implementation Plan
The [implementation plan](https://docs.google.com/spreadsheets/d/1lqBAx5N1Dn4QFrwh_JoxtfObtnspct16oYS3RlSRI44/edit?usp=sharing) contains the following sheets:
1. Naming Convention
2. Events Spec
3. Dev Implementation Plan
4. User Properties (Custom, Default and Reserved)

The Events Spec sheet contains all of the events and properties, along with their descriptions and associated KPIs. This sheet is intended to be used by RSC staff. The Dev Implementation Plan also contains all of the events and properties, as well as example method calls for each event and is intended to be used by any developers. Neither the Events Spec nor the Dev Implementation plan include Mixpanel's [default event properties](https://help.mixpanel.com/hc/en-us/articles/115004613766-Default-Properties-Collected-by-Mixpanel), however it is expected that they are tracked. Please utilize and update the "Developer Notes" and "Implemented?" sections.

### How to Use Mixpanel.js
The Mixpanel.js file holds all of the functions to be called in the SRC. The variables are fabricated and were added for the sake of clarity, but can be implemented as is. 

Note: The method call examples in the Dev Implementation Plan Sheet and the functions within Mixpanel.js are the same besides the property values.

### Merging Mixpanel Projects
In order to implement the new specs without losing any data, we will have to create new projects in Mixpanel and import the data from the older ones by [merging projects](https://help.mixpanel.com/hc/en-us/articles/115004493763-Merge-Or-Combine-Mixpanel-Projects?auth_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhY2NvdW50X2lkIjoxODAzMDQ2LCJ1c2VyX2lkIjo2NzE0MDgxNjg4NTk2LCJ0aWNrZXRfaWQiOjQzODc2OSwiZGVmbGVjdGlvbl9pZCI6NzIwNTkyNTk1MTUwOCwiYXJ0aWNsZXMiOlsxMTUwMDQ0OTM3NjMsMzYwMDIwNDYxOTUyLDM2MDAzMzI0ODkzMl0sInRva2VuIjpudWxsLCJleHAiOjE2NTg0MjY5NjN9.zRg1HrloF-AUqI4xQDIZ46aSpiaqHpJYq6JCCuzW4O4&solved=0). 

Things to Note when Merging:
* When exporting the historical data, perform any transformations needed, e.g. renaming events to fit updated implementation. 
* Events are written immutably in Mixpanel's servers. This means that you can export some events from one project and re-import them into another project, but it is not possible to delete the events from the first project. 
* The timestamps of the events have been written in your project timezone and will therefore be exported as such. Before reimporting these events into the new project, it will be necessary to convert these event timestamps into UTC.

[MTUs are billed](https://help.mixpanel.com/hc/en-us/articles/360001465686) per project, so if a user performs a qualifying event in multiple projects, they are counted once per project. It is important to delete the old projects once the new implementation is up and running and the projects have been merged.
