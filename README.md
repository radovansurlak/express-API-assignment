# Water Hauling Calculation 💧🚚

Welcome to Sudolabs take-home exercise 👋

## Requirements:

- Use Node.js.
- Expect the app will be later developed further by someone else. Write your code with that in mind.
- Do not use a locally installed database. You can use a local file, free version of some cloud database, or any other
  method.
- Your app should not require any pre-requisites. It should run on any machine with the latest LTS version of Node.
  Alternatively, you can create a Docker image.  
- The task is to write the code in **the best quality**. It's totally fine to finish just part of the tasks. You don't have to implement everything, focus on quality and spend no more than **4 hours** on the assignment.
- Once you finished, create Pull Request with all changes.
- In order to create a Pull Request, you will need to develop in the feature branch. If you are not familiar with this workflow check [this article](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow).

## Terms specification

**Water hauling company** - A company which is specializing in water hauling driver contracting, management, and water
transportation from hauling sites to deposits.

**Driver** - A company or an individual who is focusing on water transportation.

**Tank** - A water storage unit.

**Site** - A hauling site where water is pumped into storage tanks and ready for transport.

**Deposit** - A place where water is transported for storage purposes and further usage.

## Back Story

Drivers usually work for water hauling companies as subcontractors. Their job is to pump water from tanks on a site to a
vehicle fully capacity and then transport it to deposits for further processing. When the driver arrives at the site
he/she is able to haul water from any tank. To measure how much water has been hauled they must enter water levels into
the application. One of many factors to they pay is the amount of water transported from a site to deposits. In order to
help with a precise calculation, a water hauling company asked us to implement a simple solution.

**What's the problem?**

Usually, the driver must enter two values (start and end water level) in the application. It would be straightforward,
however, almost all tanks are deformed in several different places because of the impact of the local environment (heat,
rain, cold, etc.). Therefore the amount of hauled water from two different tanks with the same height levels will be
different.

**What's our goal?**

The solution will help a water hauling company efficiently calculate the amount of water pumped from a tank into a
transport vehicle.

**What's a proposed solution?**

We need to split each tank into a number of segments (based on tank deformations and defects) so the calculation of
pumped water will be more precise.



### Task

Implement API for driver-facing app and for the admin-facing app of the platform described above.

**API should serve these actions:**

1. Admin should be able to insert a new tank with manually specified height and overall fluid volume.
2. Admin should be able to specify an unlimited number of segments with the following data, start and end height, exact
   volume in liters per 1 cm of tank height

_Example:\
The tank has a total height of 452 cm and a list of measured segments:\
0-156 → x liters per 1 cm\
157-243 → y liters per 1 cm\
244-376 → z liters per 1 cm\
377-452 → q liters per 1 cm_

3. Driver should be able to retrieve a list of available tanks.
4. Driver should be able to create a record in specific tank by entering start and end fluid levels in cm.
5. Driver should be able to retrieve a final amount of fluid pumped once finished on a specific tank.

### Evaluation

We will evaluate your solution based on these parameters:

- your VCS history, with hopefully more than 1 commit,
- the project structure,
- the project architecture,
- good coding practices,
- consistent coding style and formatting,
- namings and naming conventions,
- good use of comments,
- lint warnings and code smells
- unit tests
