// Button.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import React from "react";
import { Size, Variant } from "../../types/styles";
import styles from "./Button.module.scss";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Um componente de botão reutilizável com diferentes variantes e tamanhos.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "warning"],
      description: "A variante visual do botão",
      table: {
        type: { summary: "primary | secondary | warning" },
        defaultValue: { summary: "primary" },
      },
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "O tamanho do botão",
      table: {
        type: { summary: "sm | md | lg" },
        defaultValue: { summary: "md" },
      },
    },
    children: {
      control: { type: "text" },
      description: "Conteúdo do botão (texto ou elemento React)",
      table: {
        type: { summary: "React.ReactElement" },
      },
    },
    onButtonClick: {
      action: "clicked",
      description: "Função chamada quando o botão é clicado",
      table: {
        type: { summary: "() => void" },
      },
    },
  },
  args: {
    variant: "primary",
    size: "md",
    children: <span>Button</span>,
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: <span>Primary Button</span>,
  },
  parameters: {
    docs: {
      description: {
        story: "Botão primário para ações principais.",
      },
    },
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: <span>Secondary Button</span>,
  },
  parameters: {
    docs: {
      description: {
        story: "Botão secundário para ações menos importantes.",
      },
    },
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    children: <span>Warning Button</span>,
  },
  parameters: {
    docs: {
      description: {
        story: "Botão de aviso para ações destrutivas ou perigosas.",
      },
    },
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    children: <span>Small Button</span>,
  },
  parameters: {
    docs: {
      description: {
        story: "Botão pequeno para interfaces compactas.",
      },
    },
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    children: <span>Medium Button</span>,
  },
  parameters: {
    docs: {
      description: {
        story: "Botão médio - tamanho padrão.",
      },
    },
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: <span>Large Button</span>,
  },
  parameters: {
    docs: {
      description: {
        story: "Botão grande para chamadas de ação importantes.",
      },
    },
  },
};

export const PrimaryLarge: Story = {
  args: {
    variant: "primary",
    size: "lg",
    children: <span>Primary Large Button</span>,
  },
  parameters: {
    docs: {
      description: {
        story: "Combinação de variante primária com tamanho grande.",
      },
    },
  },
};

export const WarningSmall: Story = {
  args: {
    variant: "warning",
    size: "sm",
    children: <span>Warning Small</span>,
  },
  parameters: {
    docs: {
      description: {
        story: "Botão de aviso em tamanho pequeno.",
      },
    },
  },
};

export const SecondaryLarge: Story = {
  args: {
    variant: "secondary",
    size: "lg",
    children: <span>Secondary Large</span>,
  },
};

export const WithClickAction: Story = {
  args: {
    variant: "primary",
    children: <span>Click Me!</span>,
    onButtonClick: () => console.log("Button clicked in Storybook!"),
  },
  parameters: {
    docs: {
      description: {
        story:
          'Botão com ação de clique - verifique a aba "Actions" para ver o callback.',
      },
    },
  },
};

export const WithIcon: Story = {
  args: {
    variant: "primary",
    children: (
      <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <span>⭐</span>
        Button with Icon
      </span>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: "Botão com conteúdo complexo incluindo ícone.",
      },
    },
  },
};

export const DisabledState: Story = {
  render: (args) => (
    <button
      className={`${styles.button} ${styles[args.variant!]} ${
        styles[args.size!]
      }`}
      style={{ opacity: 0.5, cursor: "not-allowed" }}
      disabled
    >
      {args.children}
    </button>
  ),
  args: {
    variant: "primary",
    children: <span>Disabled Button</span>,
  },
  parameters: {
    docs: {
      description: {
        story: "Exemplo de botão em estado desabilitado (apenas visual).",
      },
    },
  },
};

export const AllVariants: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        alignItems: "center",
      }}
    >
      {(["primary", "secondary", "warning"] as Variant[]).map((variant) => (
        <div
          key={variant}
          style={{ display: "flex", gap: "12px", alignItems: "center" }}
        >
          {(["sm", "md", "lg"] as Size[]).map((size) => (
            <Button
              key={`${variant}-${size}`}
              variant={variant}
              size={size}
              onButtonClick={() => console.log(`${variant} ${size} clicked`)}
            >
              <span>
                {variant} - {size}
              </span>
            </Button>
          ))}
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Showcase com todas as combinações de variantes e tamanhos.",
      },
    },
  },
};

export const InteractiveTest: Story = {
  args: {
    variant: "primary",
    children: <span>Hover and Click Me</span>,
  },
  play: async ({ canvasElement }) => {
    // Esta função permite testes interativos no Storybook
    const button = canvasElement.querySelector("button");

    // Simula hover
    button?.dispatchEvent(new MouseEvent("mouseover", { bubbles: true }));

    // Simula foco
    button?.focus();
  },
};
