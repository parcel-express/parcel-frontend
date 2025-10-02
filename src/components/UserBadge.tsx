import Image from 'next/image';
import React from 'react';
import styled, { css } from 'styled-components';

import { colors } from '@/styles/colors';

type Presence = 'online' | 'offline' | 'away';

interface Props {
  name: string;
  email: string;
  avatarUrl?: string;
  presence?: Presence;
  className?: never;
}

const PRESENCE_COLORS: Record<Presence, string> = {
  online: '#17B26A',
  offline: '#D0D5DD',
  away: '#F79009',
};

const Card = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  background: ${colors.background.white};
  border: 1px solid ${colors.border.light};
  border-radius: 12px;
  padding: 12px;
  width: 100%;
`;

const AvatarWrapper = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${colors.background.light};
  color: #667085;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 14px;
  overflow: visible;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const PresenceDot = styled.span<{ $presence: Presence }>`
  position: absolute;
  bottom: 2px;
  right: 2px;
  width: 10px;
  height: 10px;
  border: 2px solid ${colors.background.white};
  border-radius: 50%;
  ${({ $presence }) => css`
    background: ${PRESENCE_COLORS[$presence]};
  `}
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.2;
`;

const Name = styled.span`
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: ${colors.text.primary};
`;

const Email = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${colors.text.tertiary};
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 180px;
  white-space: nowrap;
  line-height: 20px;
`;

const UserBadge: React.FC<Props> = ({ name, email, avatarUrl, presence = 'online' }) => {
  const initials = React.useMemo(
    () =>
      name
        .split(' ')
        .filter(Boolean)
        .slice(0, 2)
        .map(p => p[0]?.toUpperCase())
        .join(''),
    [name]
  );

  return (
    <Card role='group' aria-label={`${name} ${presence}`}>
      <AvatarWrapper>
        {avatarUrl ? (
          <Image src={avatarUrl} alt={name} width={40} height={40} style={{ objectFit: 'cover' }} />
        ) : (
          initials
        )}
        <PresenceDot $presence={presence} />
      </AvatarWrapper>
      <Info>
        <Name>{name}</Name>
        <Email title={email}>{email}</Email>
      </Info>
    </Card>
  );
};

export default React.memo(UserBadge);
