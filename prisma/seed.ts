import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const email = process.env.SEED_ADMIN_EMAIL ?? "concierge@eleveskinwellness.com";
  const password = process.env.SEED_ADMIN_PASSWORD ?? "changeme123";

  const hashed = await bcrypt.hash(password, 12);

  await prisma.user.upsert({
    where: { email },
    update: {},
    create: {
      email,
      name: "Élevé Concierge",
      role: "ADMIN",
      password: hashed,
    },
  });

  console.log(`Seeded staff account: ${email}`);

  const existingWindows = await prisma.availabilityWindow.count();
  if (existingWindows === 0) {
    // Sample Mon–Fri, 9:00 AM–5:00 PM availability. Adjust in the portal or
    // directly in this table to reflect real provider hours before launch.
    const weekdays = [1, 2, 3, 4, 5];
    await prisma.availabilityWindow.createMany({
      data: weekdays.map((dayOfWeek) => ({ dayOfWeek, startMin: 9 * 60, endMin: 17 * 60 })),
    });
    console.log("Seeded sample Mon–Fri 9am–5pm availability window.");
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
