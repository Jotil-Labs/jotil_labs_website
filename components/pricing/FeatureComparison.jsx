import { Check, Minus } from 'lucide-react'

/**
 * Feature comparison table. Accepts tier data and a feature matrix.
 * Each row: { label: string, values: [true|false|string, ...] } (one per tier)
 */
export function FeatureComparison({ tiers, features }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-black/10">
            <th className="text-left py-4 pr-4 text-sm font-semibold text-text-secondary uppercase tracking-wider">
              Features
            </th>
            {tiers.map((tier) => (
              <th
                key={tier.slug}
                className={`text-center py-4 px-4 ${tier.highlighted ? 'text-primary' : 'text-text'}`}
              >
                <div
                  className="text-base font-bold"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {tier.name}
                </div>
                <div className="text-xs text-text-secondary font-normal mt-1">
                  {tier.price}
                  {tier.period}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {features.map((row, ri) => (
            <tr
              key={ri}
              className="border-b border-black/5 hover:bg-[#F7F9FF]/50 transition-colors"
            >
              <td className="py-3 pr-4 text-sm text-text font-medium">{row.label}</td>
              {row.values.map((val, vi) => (
                <td key={vi} className="text-center py-3 px-4">
                  {val === true ? (
                    <Check
                      size={18}
                      className="inline-block text-primary"
                      strokeWidth={2.5}
                    />
                  ) : val === false ? (
                    <Minus
                      size={16}
                      className="inline-block text-text-muted"
                      strokeWidth={2}
                    />
                  ) : (
                    <span className="text-sm text-text-secondary">{val}</span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
