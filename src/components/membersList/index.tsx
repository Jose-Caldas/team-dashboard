// /* eslint-disable @next/next/no-img-element */
import * as S from './styles'
import Pagination from '../pagination'
import { useMembers } from '../../context/useMembers'
import Dropdown from '../dropdown'
import MediaMatch from '../MediaMatch'

export function MembersList() {
  const {
    state: { loading, users },
  } = useMembers()

  return (
    <S.Container>
      <MediaMatch greaterThan="large">
        <S.Wrapper>
          <p>
            Encontrado: <span>{users.length}</span>
          </p>

          <Dropdown />
        </S.Wrapper>
      </MediaMatch>

      <S.MembersContainer>
        {loading ? <img src="/dots.svg" alt="loading" /> : <Pagination />}
      </S.MembersContainer>
    </S.Container>
  )
}
