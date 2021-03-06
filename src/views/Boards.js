import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from 'reactstrap';
import BoardForm from '../components/Forms/BoardForm';
import BoardCard from '../components/Cards/BoardCard';

const BoardContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-top: 5%;
`;

function BoardsView({
  setPins, user, boards, setBoards
}) {
  const [showButton, setShowButton] = useState(false);
  const handleClick = () => {
    setShowButton((prevState) => !prevState);
  };

  return (
    <>
      <section className="header mt-2">
      { !showButton
        ? <Button className="m-2 btn-lg" color='danger' onClick={handleClick}>Add Board</Button>
        : <div>
        <Button className="m-2 btn-lg" color='secondary' onClick={handleClick}>Close</Button>
          <BoardForm className="justify-content-center mt-3" setBoards={setBoards} user={user} boards={boards}/>
        </div>
        }
      </section>
      {boards.length === 0
        && <h3 className="text-center mt-2">
            Nothing here! Create something!
          </h3>
      }
      <BoardContainer className="card-container" id="board-cards">
        {boards.map((boardInfo) => (
          <BoardCard
            key={boardInfo.firebaseKey}
            firebaseKey={boardInfo.firebaseKey}
            imageUrl={boardInfo.imageUrl}
            title={boardInfo.title}
            user={user}
            setBoards={setBoards}
            setPins={setPins}
          />
        ))}
      </BoardContainer>
    </>
  );
}

BoardsView.propTypes = {
  boards: PropTypes.array.isRequired,
  setBoards: PropTypes.func.isRequired,
  user: PropTypes.any,
  setPins: PropTypes.func
};

export default BoardsView;
