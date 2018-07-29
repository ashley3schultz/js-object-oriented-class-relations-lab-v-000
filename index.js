let store = {drivers: [], passengers: [], trips: []}
let driverId = 0
let passengerId = 0
let tripId = 0

class Driver {
  constructor(name){
    this.name = name
    this.id = ++driverId
    store.drivers.push(this)
  }


}

class Passenger {
  constructor(name){
    this.name = name
    this.id = ++passengerId
    store.passengers.push(this)
  }

  drivers(){
    return store.drivers.filter(driver => {
      return driver.Id === this.driverid
    })
  }
}

class Trip {
  constructor(driver, passenger){
    this.id = ++tripId
    if(driver){
      this.driverId = driver.id
    }
    if(passenger){
      this.passengerId = passenger.id
    }
    store.trips.push(this)
  }

  setDriver(driver){
    this.driverId = driver.id
  }


}
