"use client";

import {
  Box,
  DefaultMantineColor,
  Grid,
  Group,
  Paper,
  Stack,
  Text,
  ThemeIcon,
} from "@mantine/core";
import {
  IconBasketDollar,
  IconBuildingStore,
  IconCashRegister,
  IconCategory2,
  IconDatabaseDollar,
  IconHeartDollar,
} from "@tabler/icons-react";
import Link from "next/link";
import { JSX } from "react";

type Items = {
  id: number;
  label: string;
  desc: string;
  href: string;
  icon: JSX.Element;
  iconColor: DefaultMantineColor;
  adminOnly: boolean;
};

const items: Items[] = [
  {
    id: 1,
    label: "Merchant Balance",
    desc: "Audit sales, close to head balance, configure amount",
    href: "/merchant-balance",
    icon: <IconBasketDollar size={36} />,
    iconColor: "cyan",
    adminOnly: true,
  },
  {
    id: 2,
    label: "Head Balance",
    desc: "Audit expenses, configure amount",
    href: "/head-balance",
    icon: <IconDatabaseDollar size={36} />,
    iconColor: "orange",
    adminOnly: true,
  },
  {
    id: 3,
    label: "Record Sales",
    desc: "Record a new sales transaction",
    href: "/record-sales",
    icon: <IconCashRegister size={36} />,
    iconColor: "red",
    adminOnly: false,
  },
  {
    id: 4,
    label: "Organize Menu",
    desc: "Add new items or configure existing ones",
    href: "/organize-menu",
    icon: <IconCategory2 size={36} />,
    iconColor: "green",
    adminOnly: false,
  },
  {
    id: 5,
    label: "Reimbursement",
    desc: "Submit and view your reimbursement requests",
    href: "/reimbursement",
    icon: <IconHeartDollar size={36} />,
    iconColor: "yellow",
    adminOnly: false,
  },
  {
    id: 6,
    label: "Consignment",
    desc: "Apply a new consignor or manage existing partners",
    href: "/consignment",
    icon: <IconBuildingStore size={36} />,
    iconColor: "violet",
    adminOnly: false,
  },
];

export default function Home() {
  return (
    <Grid p="lg" gutter="xs">
      {items.map((item) => (
        <Grid.Col key={item.id} span={{ base: 12, md: 6 }}>
          <Link
            href={item.href}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Paper withBorder p="md" radius="lg" shadow="sm">
              <Group justify="space-between" align="center">
                <Stack gap={1} flex={1}>
                  <Text size="lg" fw="bold">
                    {item.label}
                  </Text>
                  <Text size="xs" c="dimmed">
                    {item.desc}
                  </Text>
                </Stack>
                <Box>
                  <ThemeIcon
                    color={item.iconColor}
                    variant="light"
                    size="xl"
                    radius="xl"
                    p={4}
                  >
                    {item.icon}
                  </ThemeIcon>
                </Box>
              </Group>
            </Paper>
          </Link>
        </Grid.Col>
      ))}
    </Grid>
  );
}
