import type { SexType } from '@faker-js/faker'
import { faker } from '@faker-js/faker'
import type {
  DataResponse,
  Developer,
  ServiceMetrics,
  ServiceVersion,
} from '../types'
import { ServiceStatusEnum, ServiceTypeEnum } from '../types'

const developerCount: number = 10

const developers: Developer[] = [...Array(developerCount).keys()].map(() => {
  const sex: SexType = Math.random() >= 0.95 ? 'female' : 'male'
  const firstName: string = faker.person.firstName(sex)
  const lastName: string = faker.person.lastName(sex)

  return {
    id: faker.string.uuid(),
    name: firstName + ' ' + lastName,
    email: faker.internet.email({ firstName, lastName }),
    avatar: faker.image.avatar(),
  }
})

const getDeveloper = (): Developer =>
  developers[faker.number.int({ min: 0, max: developerCount - 1 })]

const data = (): DataResponse => {
  const data: DataResponse = { services: [] }

  for (let i: number = 0; i < Math.random() * 100 + 50; i++) {
    const published: ServiceStatusEnum = faker.helpers.enumValue(ServiceStatusEnum)
    const configured: boolean =
      published === ServiceStatusEnum.Published ||
      published === ServiceStatusEnum.InProgress ||
      Math.random() < 0.75

    const versions: ServiceVersion[] = (() => {
      const versionCount: number = configured
        ? faker.number.int({ min: published ? 1 : 0, max: 5 })
        : 0

      if (versionCount === 0) return []

      return [...Array(versionCount).keys()].map(() => ({
        id: faker.string.uuid(),
        name: faker.system.semver(),
        description:
          Math.random() < 0.8
            ? faker.company.catchPhrase()
            : faker.commerce.productDescription(),
        developer: published ? getDeveloper() : undefined,
        updated_at: faker.date.between({
          from: new Date().setMonth(new Date().getMonth() - 6),
          to: new Date().getTime(),
        }),
      }))
    })()

    const metrics: ServiceMetrics | undefined = (() => {
      if (!configured) return undefined

      return {
        latency: faker.number.float({ min: 0.3, max: 0.99, multipleOf: 0.01 }),
        uptime: faker.number.float({
          min: 0.895,
          max: 0.998,
          multipleOf: 0.0001,
        }),
        requests: faker.number.int({ min: 800, max: 1500000 }),
        errors: faker.number.float({
          min: 0.001,
          max: 0.089,
          multipleOf: 0.0001,
        }),
      }
    })()

    data.services.push({
      id: faker.string.uuid(),
      name: faker.commerce.productName(),
      description:
        Math.random() < 0.95
          ? Math.random() > 0.5
            ? faker.commerce.productDescription()
            : faker.company.catchPhrase()
          : '',
      type: Math.random() < 0.75 ? ServiceTypeEnum.Rest : ServiceTypeEnum.Http,
      published,
      configured,
      versions,
      metrics,
    })
  }

  return data
}

const response: DataResponse = data()

export default response
