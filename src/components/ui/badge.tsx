import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-primary-500/20 text-primary-500 border border-primary-500/30",
        secondary: "bg-dark-700 text-gray-300 border border-dark-600",
        success: "bg-accent-green/20 text-accent-green border border-accent-green/30",
        danger: "bg-accent-red/20 text-accent-red border border-accent-red/30",
        warning: "bg-accent-orange/20 text-accent-orange border border-accent-orange/30",
        info: "bg-accent-cyan/20 text-accent-cyan border border-accent-cyan/30",
        purple: "bg-accent-purple/20 text-accent-purple border border-accent-purple/30",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
