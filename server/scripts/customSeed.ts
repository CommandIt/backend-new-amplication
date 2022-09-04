import { PrismaClient } from "@prisma/client";

export async function customSeed() {
  const client = new PrismaClient();
  const username = "admin";

  //replace this sample code to populate your database
  //with data that is required for your service to start
  await client.user.update({
    where: { username: username },
    data: {
      username,
    },
  });

  const teamId = '1';
  await client.team.update({
    where: {id: teamId},
    data: {
      id: teamId,
      name: "The Squad Team",
    }
  });

  const soldierIds = ['11', '22', '33', '44', '55', '66'];
  await client.soldier.createMany({
    data: [
      {name: 'Ben Hason', teamId: teamId, id: soldierIds[0]},
      {name: 'Ziv Caspi', teamId: teamId, id: soldierIds[1]},
      {name: 'Shahar Ofer', teamId: teamId, id: soldierIds[2]},
      {name: 'Rom Cohen', teamId: teamId, id: soldierIds[3]},
      {name: 'Mike Merkman', teamId: teamId, id: soldierIds[4]},
      {name: 'Itay Chechick', teamId: teamId, id: soldierIds[5]},
    ]
  });

  await client.opinion.createMany({
    data: [
      {soldierId: soldierIds[0], date: new Date(2022, 1), text: 'loser 1'},
      {soldierId: soldierIds[0], date: new Date(2022, 2), text: 'loser mamash 2'},
      {soldierId: soldierIds[0], date: new Date(2022, 3), text: 'loser aho shiling 3'},
      {soldierId: soldierIds[0], date: new Date(2022, 4), text: 'loser efes 4'},
      {soldierId: soldierIds[0], date: new Date(2022, 5), text: 'loser garoha 5'},
    ]
  })

  client.$disconnect();
}
