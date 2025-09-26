"use client";

import {
  Badge,
  Grid,
  Group,
  Paper,
  Stack,
  Tabs,
  Text,
} from "@mantine/core";
import {
  IconMoneybagEdit,
  IconMoneybagMinus,
  IconMoneybagPlus,
  IconSettings,
  IconTransactionDollar,
} from "@tabler/icons-react";

export default function MerchantBalancePage() {
  return (
    <Grid p="lg" gutter="xs" grow>
      <Grid.Col span={{ base: 12, md: 3 }}>
        <Paper withBorder p="md" radius="lg" shadow="sm">
          <Stack>
            <Group justify="space-between">
              <Badge
                variant="light"
                color="cyan"
                size="lg"
              >
                Merchant Balance
              </Badge>
              <Text size="lg" fw="bold">
                Rp 6.531.000
              </Text>
            </Group>

            <Tabs
              variant="pills"
              radius="xl"
              defaultValue="close-to-head"
              color="cyan"
            >
              <Tabs.List grow>
                <Tabs.Tab
                  value="close-to-head"
                  leftSection={<IconTransactionDollar size={18} />}
                >
                  Close to head
                </Tabs.Tab>
                <Tabs.Tab
                  value="adjust"
                  leftSection={<IconSettings size={18} />}
                >
                  Adjust
                </Tabs.Tab>
              </Tabs.List>
            </Tabs>
          </Stack>
        </Paper>
      </Grid.Col>

      <Grid.Col span={{ base: 12, md: 6 }}>
        <Paper withBorder p="md" radius="lg" shadow="sm">
          <Stack>
            <Text size="lg" fw="bold">
              Transaction History
            </Text>

            <Tabs variant="pills" radius="xl" defaultValue="sales" color="cyan">
              <Tabs.List grow>
                <Tabs.Tab
                  value="sales"
                  leftSection={<IconMoneybagPlus size={18} />}
                >
                  Sales
                </Tabs.Tab>
                <Tabs.Tab
                  value="closings"
                  leftSection={<IconMoneybagMinus size={18} />}
                >
                  Closings
                </Tabs.Tab>
                <Tabs.Tab
                  value="adjustments"
                  leftSection={<IconMoneybagEdit size={18} />}
                >
                  Adjustments
                </Tabs.Tab>
              </Tabs.List>
            </Tabs>
          </Stack>
        </Paper>
      </Grid.Col>
    </Grid>
  );
}
