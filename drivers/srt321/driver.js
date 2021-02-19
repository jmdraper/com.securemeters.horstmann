'use strict';

const Homey = require('homey');

module.exports = class SRT321Driver extends Homey.Driver {

  async onPairListDevices() {
    return [
      {
        name: 'SRT321 Thermostat',
        data: {
          id: 'srt321Id',
        },
      },
    ];
  }

};
