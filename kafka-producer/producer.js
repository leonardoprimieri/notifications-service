import { randomUUID } from 'node:crypto';
import { Kafka } from 'kafkajs';

async function bootstrap() {
  const kafka = new Kafka({
    clientId: 'test-client',
    brokers: ['guided-finch-9088-us1-kafka.upstash.io:9092'],
    sasl: {
      mechanism: 'scram-sha-256',
      username:
        'Z3VpZGVkLWZpbmNoLTkwODgkLVUVByhWS4EYxGBXlNx5SVUDC7cmY8kwiIqD-jY',
      password:
        'nvDjBS6lYVAx2epCPMz-bHM2Ezfn0dKtTzJdJn9lzHtLFqmExcQkuoVyBUkiGmATAY2kWQ==',
    },
    ssl: true,
  });

  const producer = kafka.producer();

  await producer.connect();
  await producer.send({
    topic: 'notifications.send-notification',
    messages: [
      {
        value: JSON.stringify({
          content: 'You got a new notification!',
          category: 'social',
          recipientId: randomUUID(),
        }),
      },
    ],
  });

  await producer.disconnect();
}

bootstrap();
