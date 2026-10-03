import { Award, GraduationCap, CheckCircle2, Clock } from 'lucide-react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  certifications,
  education,
  credentialsSection,
} from '@/config/loader'
import { cn } from '@/lib/utils'

export function Certifications() {
  const { ref: sectionRef, isVisible } =
    useIntersectionObserver<HTMLDivElement>()

  // Return null if there's nothing to show
  if (certifications.length === 0 && education.length === 0) return null

  return (
    <section id="certifications" className="section-padding">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            {credentialsSection.eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-4">
            {credentialsSection.headline}
          </h2>
          {credentialsSection.description && (
            <p className="text-lg text-muted-foreground">
              {credentialsSection.description}
            </p>
          )}
        </div>

        <div
          ref={sectionRef}
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {/* Certifications */}
          {certifications.length > 0 && (
            <div>
              <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                <Award className="w-4 h-4 text-accent" />
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <Card
                    key={cert.id}
                    className={cn(
                      'border-border',
                      isVisible && 'animate-fade-in-up'
                    )}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-5">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h4 className="font-display font-semibold text-foreground leading-snug">
                          {cert.title}
                        </h4>
                        {cert.status === 'in-progress' ? (
                          <Badge
                            variant="accent"
                            className="shrink-0 gap-1 whitespace-nowrap"
                          >
                            <Clock className="w-3 h-3" />
                            In Progress
                          </Badge>
                        ) : (
                          <Badge
                            variant="secondary"
                            className="shrink-0 gap-1 whitespace-nowrap"
                          >
                            <CheckCircle2 className="w-3 h-3" />
                            Completed
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm font-medium text-muted-foreground mb-2">
                        {cert.issuer}
                      </p>
                      {cert.description && (
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {cert.description}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Education */}
          {education.length > 0 && (
            <div>
              <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                <GraduationCap className="w-4 h-4 text-accent" />
                Education
              </h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <Card
                    key={edu.id}
                    className={cn(
                      'border-border',
                      isVisible && 'animate-fade-in-up'
                    )}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-5">
                      <h4 className="font-display font-semibold text-foreground leading-snug mb-2">
                        {edu.degree}
                      </h4>
                      <p className="text-sm font-medium text-muted-foreground mb-1">
                        {edu.institution}
                      </p>
                      {edu.period && (
                        <p className="text-xs text-muted-foreground mb-2">
                          {edu.period}
                        </p>
                      )}
                      {edu.description && (
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {edu.description}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
