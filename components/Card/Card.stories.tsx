import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import React from "react";
import { SizeType, VariantType } from "../../types/styles";

const SampleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 5.5V7H9V5.5L3 7V9L9 10.5V12L3 13.5V15.5L9 14V16L3 17.5V19.5L9 18V22H15V18L21 19.5V17.5L15 16V14L21 15.5V13.5L15 12V10.5L21 9Z" />
  </svg>
);

const SettingsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04.32.07.64.07.97c0 2.12-.74 4.07-1.97 5.61l1.4 1.4c1.27-1.48 2.05-3.32 2.05-5.31c0-1.01-.16-1.98-.45-2.89l-1.1.22m-14.86 0l-1.1-.22c-.29.91-.45 1.88-.45 2.89c0 1.99.78 3.83 2.05 5.31l1.4-1.4C5.74 18.07 5 16.12 5 14c0-.33.03-.65.07-.97l1.5.31M19.43 12.97l1.5-.31c.22-.89.35-1.82.35-2.78c0-2.12-.74-4.07-1.97-5.61l-1.4 1.4c1.03 1.26 1.67 2.88 1.67 4.61c0 .56-.08 1.11-.22 1.64l1.07.25m-14.86 0l1.07-.25c-.14-.53-.22-1.08-.22-1.64c0-1.73.64-3.35 1.67-4.61L4.07 4.07C2.84 5.61 2.1 7.56 2.1 9.68c0 .96.13 1.89.35 2.78l1.5.31z" />
  </svg>
);

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Um componente de card reutilizável para exibir informações com diferentes variantes visuais e tamanhos.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "warning"],
      description: "A variante visual do card",
      table: {
        type: { summary: "primary | secondary | warning" },
        defaultValue: { summary: "primary" },
      },
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "O tamanho do card",
      table: {
        type: { summary: "sm | md | lg" },
        defaultValue: { summary: "md" },
      },
    },
    title: {
      control: { type: "text" },
      description: "Título do card",
      table: {
        type: { summary: "string" },
      },
    },
    value: {
      control: { type: "text" },
      description: "Valor principal do card",
      table: {
        type: { summary: "string" },
      },
    },
    rightIcon: {
      control: { type: "boolean" },
      description: "Exibir ícone à direita",
      mapping: {
        true: <SampleIcon />,
        false: undefined,
      },
    },
    className: {
      control: { type: "text" },
      description: "Classes CSS adicionais",
      table: {
        type: { summary: "string" },
      },
    },
  },
  args: {
    variant: "primary",
    size: "md",
    title: "Card Title",
    value: 1234.56,
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Primary: Story = {
  args: {
    variant: "primary",
    title: "Total de Vendas",
    value: 25000.0,
  },
  parameters: {
    docs: {
      description: {
        story: "Card primário para informações principais.",
      },
    },
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    title: "Usuários Ativos",
    value: 1.234,
  },
  parameters: {
    docs: {
      description: {
        story: "Card secundário para informações complementares.",
      },
    },
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    title: "Atenção",
  },
  parameters: {
    docs: {
      description: {
        story: "Card de aviso para alertas e informações importantes.",
      },
    },
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    title: "Conversão",
    value: 2.5,
  },
  parameters: {
    docs: {
      description: {
        story: "Card pequeno para interfaces compactas.",
      },
    },
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    title: "Ticket Médio",
    value: 150.0,
  },
  parameters: {
    docs: {
      description: {
        story: "Card médio - tamanho padrão.",
      },
    },
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    title: "Receita Total do Mês",
    value: 89456.23,
  },
  parameters: {
    docs: {
      description: {
        story: "Card grande para informações destacadas.",
      },
    },
  },
};

export const WithIcon: Story = {
  args: {
    title: "Meta Mensal",
    value: 85,
    rightIcon: <SettingsIcon />,
  },
  parameters: {
    docs: {
      description: {
        story: "Card com ícone à direita para ações ou indicadores visuais.",
      },
    },
  },
};

export const WithCustomIcon: Story = {
  args: {
    title: "Crescimento",
    value: 12.5,
    rightIcon: <div style={{ color: "green", fontSize: "20px" }}>↗</div>,
  },
  parameters: {
    docs: {
      description: {
        story: "Card com ícone personalizado.",
      },
    },
  },
};

export const FinancialCard: Story = {
  args: {
    variant: "primary",
    size: "md",
    title: "Saldo Disponível",
    value: 45678.9,
    rightIcon: <SampleIcon />,
  },
  parameters: {
    docs: {
      description: {
        story: "Exemplo de card para dashboard financeiro.",
      },
    },
  },
};

export const AllVariantsShowcase: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
        maxWidth: "900px",
      }}
    >
      {(["primary", "secondary", "warning"] as VariantType[]).map((variant) => (
        <div
          key={variant}
          style={{ display: "flex", flexDirection: "column", gap: "15px" }}
        >
          <h4 style={{ margin: "0 0 10px 0", textTransform: "capitalize" }}>
            {variant}
          </h4>
          {(["sm", "md", "lg"] as SizeType[]).map((size) => (
            <Card
              key={`${variant}-${size}`}
              variant={variant}
              size={size}
              title={`${variant} - ${size}`}
              value={Math.random() * 10000}
              rightIcon={size === "lg" ? <SampleIcon /> : undefined}
            />
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

export const CardGrid: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "16px",
        maxWidth: "800px",
      }}
    >
      <Card variant="primary" size="sm" title="Vendas Hoje" value={2.345} />
      <Card
        variant="primary"
        size="md"
        title="Meta do Mês"
        value={50.0}
        rightIcon={<SettingsIcon />}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Exemplo de uso em grid para dashboard.",
      },
    },
  },
};
