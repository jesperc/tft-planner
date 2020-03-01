const Chance = require('chance')

const chance = new Chance(1337)

const generateGuid = (): string => {
  return chance.guid()
}

export default generateGuid
