import { ServiceStatusEnum, ServiceTypeEnum, type DataResponse } from '../types'

const dataResponses: DataResponse[] = [
  {
    services: [
      {
        id: '1',
        name: 'Service 1',
        description: 'Description of Service 1',
        type: ServiceTypeEnum.Http,
        published: ServiceStatusEnum.Published,
        configured: true,
        versions: [
          {
            id: '1',
            name: 'Version 1',
            description: 'Description of Version 1',
            developer: {
              id: '1',
              name: 'Developer 1',
              email: 'developer1@example.com',
              avatar: 'avatar1.jpg',
            },
            updated_at: new Date(),
            type: ServiceTypeEnum.Http,
          },
        ],
        metrics: {
          latency: 100,
          uptime: 99.9,
          requests: 1000,
          errors: 10,
        },
      },
      {
        id: '2',
        name: 'Service 2',
        description: 'Description of Service 2',
        type: ServiceTypeEnum.Rest,
        published: ServiceStatusEnum.InProgress,
        configured: true,
        versions: [
          {
            id: '1',
            name: 'Version 1',
            description: 'Description of Version 1',
            developer: {
              id: '2',
              name: 'Developer 2',
              email: 'developer2@example.com',
              avatar: 'avatar2.jpg',
            },
            updated_at: new Date(),
            type: ServiceTypeEnum.Rest,
          },
        ],
        metrics: {
          latency: 200,
          uptime: 99.5,
          requests: 500,
          errors: 5,
        },
      },
    ],
  },
  {
    services: [
      {
        id: '3',
        name: 'Service 3',
        description: 'Description of Service 3',
        type: ServiceTypeEnum.Http,
        published: ServiceStatusEnum.Unpublished,
        configured: false,
        versions: [
          {
            id: '1',
            name: 'Version 1',
            description: 'Description of Version 1',
            developer: {
              id: '3',
              name: 'Developer 3',
              email: 'developer3@example.com',
              avatar: 'avatar3.jpg',
            },
            updated_at: new Date(),
            type: ServiceTypeEnum.Http,
          },
        ],
        metrics: {
          latency: 300,
          uptime: 98.8,
          requests: 200,
          errors: 20,
        },
      },
    ],
  },
  {
    services: [
      {
        id: '4',
        name: 'Service 4',
        description: 'Description of Service 4',
        type: ServiceTypeEnum.Rest,
        published: ServiceStatusEnum.Published,
        configured: true,
        versions: [
          {
            id: '1',
            name: 'Version 1',
            description: 'Description of Version 1',
            developer: {
              id: '4',
              name: 'Developer 4',
              email: 'developer4@example.com',
              avatar: 'avatar4.jpg',
            },
            updated_at: new Date(),
            type: ServiceTypeEnum.Rest,
          },
        ],
        metrics: {
          latency: 150,
          uptime: 99.0,
          requests: 800,
          errors: 8,
        },
      },
    ],
  },
]

export default dataResponses
