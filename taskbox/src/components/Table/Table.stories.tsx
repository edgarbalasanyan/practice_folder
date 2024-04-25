import { Meta, StoryObj } from "@storybook/react";
import Table from ".";
const meta: Meta<typeof Table> = {
  component: Table,
  title: "components/Table",
  tags: ["autodocs"],
  //   argTypes: {
  //     variant: {
  //       control: "select",
  //       options: ["standart", "outlined", "filled"],
  //     }
  //   },
};
export default meta;

type Story = StoryObj<typeof Table>;

export const TwoColumns: Story = {
  args: {
    data: [
      {
        id: 1,
        name: "John Doe",
        email: "",
      },
      {
        id: 2,
        name: "Roe Mon",
        email: "",
      },
      {
        id: 3,
        name: "Mike Bones",
        email: "",
      },
    ],

    columns: [
      {
        id: "id",
        header: "Id",
        footer: "idfooter",
        accessorKey: "id",
        cell: (ctx) => ctx.getValue(),
      },
      {
        id: "name",
        header: "Name",
        footer: "namefooter",
        accessorKey: "name",
        // cell: (ctx) => ctx.getValue(),
      },
    ],
  },
};

export const FiveColumns: Story = {
  args: {
    showNavigation: true,
    data: [
      {
        id: 1,
        name: "John Doe",
        email: "1mail",
      },
      {
        id: 2,
        name: "Roe Mon",
        email: "2mail",
        total: "2 * 2mail",
        sub: "aaa",
      },
      {
        id: 3,
        name: "Mike Bones",
        email: "3mail",
        sub: "dsdsdsds",
        total: "motal",
      },
      {
        id: 1,
        name: "John Doe",
        email: "1mail",
      },
      {
        id: 2,
        name: "Roe Mon",
        email: "2mail",
        total: "2 * 2mail",
        sub: "aaa",
      },
      {
        id: 3,
        name: "Mike Bones",
        email: "3mail",
        sub: "dsdsdsds",
        total: "motal",
      }, {
        id: 1,
        name: "John Doe",
        email: "1mail",
      },
      {
        id: 2,
        name: "Roe Mon",
        email: "2mail",
        total: "2 * 2mail",
        sub: "aaa",
      },
      {
        id: 3,
        name: "Mike Bones",
        email: "3mail",
        sub: "dsdsdsds",
        total: "motal",
      },
    ],

    columns: [
      {
        id: "id",
        header: "Id",
        footer: "id_footer",
        accessorKey: "id",
        cell: (ctx) => ctx.getValue(),
      },
      {
        id: "name",
        header: "Name",
        footer: "name_footer",
        accessorKey: "name",
        cell: (ctx) => ctx.getValue(),
      },
      {
        id: "email",
        header: "Email",
        footer: "email_footer",
        accessorKey: "email",
        cell: (ctx) => ctx.getValue(),
      },
      {
        id: "total",
        header: "Total",
        accessorKey: "total",
        cell: (ctx) => ctx.getValue(),
      },
      {
        id: "sub",
        header: "Sub",
        accessorKey: "sub",
        footer: "footer",
        cell: (ctx) => ctx.getValue(),
      },
    ],
  },
};
