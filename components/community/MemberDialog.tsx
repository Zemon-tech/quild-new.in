'use client'

import { useState } from 'react'

import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Separator } from '@/components/ui/separator'
import { ScrollArea } from '@/components/ui/scroll-area'
import type { Member } from '@/lib/community-data'
import { useIsMobile } from '@/hooks/use-mobile'

import MemberCard from '@/components/community/MemberCard'

function SocialButton({
  label,
  href,
}: {
  label: string
  href: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        fontFamily: 'var(--font-jetbrains-mono)',
        fontSize: '0.58rem',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: 'var(--ink)',
        border: '1px solid var(--border)',
        padding: '0.35rem 0.875rem',
        textDecoration: 'none',
        transition: 'background 0.18s, color 0.18s',
        borderRadius: 0,
        display: 'inline-flex',
        alignItems: 'center',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'var(--ink)'
        e.currentTarget.style.color = 'var(--bg)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'transparent'
        e.currentTarget.style.color = 'var(--ink)'
      }}
    >
      {label} →
    </a>
  )
}

function DialogProfileContent({
  member,
  onClose,
}: {
  member: Member
  onClose: () => void
}) {
  const isMobile = useIsMobile()
  const hasAvatar = Boolean(member.avatarUrl)

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        height: '100%',
        width: '100%',
        alignItems: 'stretch',
      }}
    >
      <div
        style={{
          width: isMobile ? '100%' : '360px',
          flex: isMobile ? '0 0 auto' : '0 0 360px',
          overflow: 'hidden',
          background: 'var(--bg)',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            width: '100%',
            flex: isMobile ? '0 0 auto' : '1 1 auto',
            height: isMobile ? '240px' : undefined,
            minHeight: isMobile ? undefined : '360px',
            background: member.avatarBg ?? 'var(--surface)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          {hasAvatar ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={member.avatarUrl}
              alt={member.name}
              loading="lazy"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
          ) : (
            <span
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontStyle: 'italic',
                fontWeight: 600,
                fontSize: isMobile ? '5rem' : '6rem',
                lineHeight: 1,
                color: 'var(--ink)',
                opacity: 0.2,
                userSelect: 'none',
              }}
            >
              {member.initials}
            </span>
          )}

          <button
            type="button"
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              fontFamily: 'var(--font-jetbrains-mono)',
              fontSize: '0.58rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--muted)',
              background: 'var(--bg)',
              border: '1px solid var(--border)',
              padding: '0.3rem 0.7rem',
              cursor: 'pointer',
              borderRadius: 0,
            }}
          >
            CLOSE
          </button>
        </div>

        <div style={{ marginTop: 'auto' }}>
          <Separator />
        </div>

        <div
          style={{
            padding: isMobile ? '1.25rem 1.5rem' : '1.75rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontStyle: 'italic',
              fontWeight: 600,
              fontSize: isMobile ? '2rem' : '2.25rem',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              color: 'var(--ink)',
              margin: '0 0 0.5rem',
            }}
          >
            {member.name}
          </h2>

          <div
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '0.92rem',
              color: 'var(--muted)',
              lineHeight: 1.6,
            }}
          >
            {member.discipline}
            {member.college && ` · ${member.college}`}
          </div>

          {member.tags.length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {member.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontFamily: 'var(--font-jetbrains-mono)',
                    fontSize: '0.52rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--muted)',
                    border: '1px solid var(--border)',
                    padding: '0.2rem 0.6rem',
                    borderRadius: 0,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {!isMobile && <Separator orientation="vertical" />}

      {isMobile && <Separator />}

      <div style={{ flex: 1, minWidth: 0, height: isMobile ? 'auto' : '100%' }}>
        <ScrollArea
          data-lenis-prevent
          data-lenis-prevent-wheel
          data-lenis-prevent-touch
          className={isMobile ? 'h-[55vh]' : 'h-full'}
          style={{ overscrollBehavior: 'contain' }}
        >
          <div
            style={{
              padding: isMobile ? '1.5rem' : '2rem 2.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-jetbrains-mono)',
                  fontSize: '0.58rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--muted)',
                  marginBottom: '0.75rem',
                }}
              >
                ABOUT
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '0.95rem',
                  color: 'var(--muted)',
                  lineHeight: 1.8,
                  margin: 0,
                }}
              >
                {member.bio}
              </p>
            </div>

            <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.25rem' }}>
              <div
                style={{
                  fontFamily: 'var(--font-jetbrains-mono)',
                  fontSize: '0.58rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--muted)',
                  marginBottom: '0.75rem',
                }}
              >
                LOCATION
              </div>
              <div style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--ink)' }}>
                {member.location}
              </div>
            </div>

            <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.25rem' }}>
              <div
                style={{
                  fontFamily: 'var(--font-jetbrains-mono)',
                  fontSize: '0.58rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--muted)',
                  marginBottom: '0.75rem',
                }}
              >
                DETAILS
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                  gap: '0.75rem 1.25rem',
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-jetbrains-mono)',
                      fontSize: '0.52rem',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--muted)',
                      marginBottom: '0.35rem',
                    }}
                  >
                    ROLE
                  </div>
                  <div style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--ink)' }}>
                    {member.role}
                  </div>
                </div>

                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-jetbrains-mono)',
                      fontSize: '0.52rem',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--muted)',
                      marginBottom: '0.35rem',
                    }}
                  >
                    COHORT
                  </div>
                  <div style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--ink)' }}>
                    {member.cohort ? `Cohort ${member.cohort}` : '—'}
                  </div>
                </div>

                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-jetbrains-mono)',
                      fontSize: '0.52rem',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--muted)',
                      marginBottom: '0.35rem',
                    }}
                  >
                    COLLEGE
                  </div>
                  <div style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--ink)' }}>
                    {member.college ?? '—'}
                  </div>
                </div>

                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-jetbrains-mono)',
                      fontSize: '0.52rem',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--muted)',
                      marginBottom: '0.35rem',
                    }}
                  >
                    DISCIPLINE
                  </div>
                  <div style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--ink)' }}>
                    {member.discipline}
                  </div>
                </div>
              </div>
            </div>

            {member.role === 'COHORT PARTICIPANT' && member.participant && (
              <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.25rem' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-jetbrains-mono)',
                    fontSize: '0.58rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--muted)',
                    marginBottom: '0.75rem',
                  }}
                >
                  COHORT WORK
                </div>

                {member.participant.projectsBuilt.length > 0 && (
                  <div style={{ display: 'grid', gap: '0.85rem' }}>
                    {member.participant.projectsBuilt.map((project) => (
                      <div key={project.name}>
                        <div style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--ink)' }}>
                          {project.name}
                        </div>
                        <div
                          style={{
                            fontFamily: 'var(--font-dm-sans)',
                            color: 'var(--muted)',
                            fontSize: '0.9rem',
                            lineHeight: 1.6,
                            marginTop: '0.25rem',
                          }}
                        >
                          {project.description}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {member.participant.contributions.length > 0 && (
                  <div style={{ marginTop: '1rem', display: 'grid', gap: '0.45rem' }}>
                    {member.participant.contributions.map((c) => (
                      <div
                        key={c}
                        style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--muted)' }}
                      >
                        {c}
                      </div>
                    ))}
                  </div>
                )}

                {member.participant.testimonial && (
                  <div
                    style={{
                      marginTop: '1rem',
                      fontFamily: 'var(--font-dm-sans)',
                      color: 'var(--ink)',
                      lineHeight: 1.7,
                    }}
                  >
                    “{member.participant.testimonial}”
                  </div>
                )}
              </div>
            )}

            {member.role === 'TEAM' && member.team && (
              <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.25rem' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-jetbrains-mono)',
                    fontSize: '0.58rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--muted)',
                    marginBottom: '0.75rem',
                  }}
                >
                  TEAM
                </div>

                <div style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--ink)' }}>
                  {member.team.title}
                </div>

                {member.team.responsibilities.length > 0 && (
                  <div style={{ marginTop: '0.75rem', display: 'grid', gap: '0.45rem' }}>
                    {member.team.responsibilities.map((r) => (
                      <div
                        key={r}
                        style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--muted)' }}
                      >
                        {r}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {(member.socials.x ||
              member.socials.linkedin ||
              member.socials.github ||
              member.socials.portfolio) && (
              <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.25rem' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-jetbrains-mono)',
                    fontSize: '0.58rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--muted)',
                    marginBottom: '0.75rem',
                  }}
                >
                  LINKS
                </div>
                <div
                  style={{
                    display: 'flex',
                    gap: '0.75rem',
                    flexWrap: 'wrap',
                  }}
                >
                  {member.socials.x && (
                    <SocialButton
                      label="X"
                      href={`https://x.com/${member.socials.x}`}
                    />
                  )}
                  {member.socials.linkedin && (
                    <SocialButton
                      label="LINKEDIN"
                      href={`https://linkedin.com/in/${member.socials.linkedin}`}
                    />
                  )}
                  {member.socials.github && (
                    <SocialButton
                      label="GITHUB"
                      href={`https://github.com/${member.socials.github}`}
                    />
                  )}
                  {member.socials.portfolio && (
                    <SocialButton label="PORTFOLIO" href={member.socials.portfolio} />
                  )}
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}

export function MemberDialog({ member }: { member: Member }) {
  const [open, setOpen] = useState(false)
  const isMobile = useIsMobile()

  const contentClassName =
    'rounded-none shadow-none p-0 overflow-hidden ' +
    'border border-[var(--border)] bg-[var(--bg)] ' +
    'backdrop:bg-[var(--bg)] backdrop:backdrop-blur-none ' +
    'dark:border-[var(--border)] ' +
    (isMobile
      ? 'w-[100vw] max-w-[100vw] border-x-0 h-[85vh]'
      : 'w-full max-w-[940px] h-[70vh] max-h-[640px]')

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div>
        <MemberCard member={member} onClick={() => setOpen(true)} />
      </div>

      <DialogContent
        className={contentClassName}
      >
        <DialogProfileContent member={member} onClose={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  )
}
