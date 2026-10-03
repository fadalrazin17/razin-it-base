import { clients, clientsEyebrow } from '@/config/loader'
import { cn } from '@/lib/utils'

export function ClientLogos() {
  // Don't render if no clients
  if (clients.length === 0) return null

  return (
    <div className="flex flex-col items-center gap-2">
      <span className="text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 font-medium">
        {clientsEyebrow}
      </span>
      <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5">
        {clients.map((client, index) => (
          <span key={client.name} className="flex items-center gap-3">
            <span
              className={cn(
                'text-xs md:text-sm font-semibold whitespace-nowrap transition-colors duration-200',
                client.highlight
                  ? 'text-brass-600 dark:text-brass-400'
                  : 'text-slate-400 dark:text-slate-500 hover:text-brass-500 dark:hover:text-brass-400'
              )}
            >
              {client.name}
            </span>
            {index < clients.length - 1 && (
              <span className="text-slate-300 dark:text-slate-600">•</span>
            )}
          </span>
        ))}
      </div>
    </div>
  )
}
