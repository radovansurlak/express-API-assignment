# Water Hauling Calculation 💧🚚

To run the project locally run:

```bash
yarn install && yarn dev
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGODB_URI`
`JWT_SECRET`
`JWT_EXPIRES_IN`

Since this is a private repo, I'll include my `.env` file.

# Testing the app

There are a few test users in the database that you can use for testing.

One is with driver role and other with admin role.

`username: driver`

`password: driverpass`

or

`username: admin`

`password: adminpass`

## API Reference

### Using protected routes

To use protected API routes, you'll need to provide `Authorization` token
with value `Bearer {YOUR AUTH TOKEN}`,

e.g. `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9`

## Login

```http
  POST /login
```

| Parameter  | Type     | Description            |
| :--------- | :------- | :--------------------- |
| `username` | `string` | **Required**. Username |
| `password` | `string` | **Required**. Password |

## Get all tanks
### Protected

```http
  GET /getAllTanks
```

## Create tank
### Protected

```http
  POST /createTank
```

| Parameter        | Type     | Description                                     |
| :--------------- | :------- | :---------------------------------------------- |
| `heightInCm`     | `number` | **Required**. Height of the tank in centimeters |
| `volumeInLiters` | `number` | **Required**. Volume of the tank in liters      |

## Add tank segment
### Protected

```http
  POST /addTankSegment
```

| Parameter             | Type     | Description                                                   |
| :-------------------- | :------- | :------------------------------------------------------------ |
| `tankId`              | `string` | **Required**. ObjectId of the specific tank                   |
| `startHeightInCm`     | `number` | **Required**. Start height of the tank segment in centimeters |
| `endHeightInCm`       | `number` | **Required**. End height of the tank segment in centimeters   |
| `volumePerCmInLiters` | `number` | **Required**. Volume per centimeter of the segment in liters  |

## Create pump record
### Protected

```http
  POST /createPumpRecord
```

| Parameter             | Type     | Description                                                   |
| :-------------------- | :------- | :------------------------------------------------------------ |
| `tankId`              | `string` | **Required**. ObjectId of the specific tank                   |
| `startLevelInCm`     | `number` | **Required**. Level of water in tank at the start of pumping in centimeters |
| `endLevelInCm`       | `number` | **Required**. End level of water after pumping in centimeters   |


# Caveats:

1. Missing hashing passwords in the DB at this point
2. Integration tests are sketched out in naively
3. Testing creates new users in the DB, this should be handled differently
4. ...and probably more, which is something we can discuss
