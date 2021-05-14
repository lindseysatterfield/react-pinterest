import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import BoardCard from '../components/Cards/BoardCard';
import BoardForm from '../components/Forms/BoardForm';

function BoardsView({ user, boards, setBoards }) {
  const [showButton, setShowButton] = useState(false);
  const handleClick = () => {
    setShowButton((prevState) => !prevState);
  };

  return (
    <>
      <section className="header">
       { !showButton
         ? <Button className="m-3" color='danger' onClick={handleClick}>Add Board</Button>
         : <div>
            <Button className="m-3" color='secondary' onClick={handleClick}>Close</Button>
            <BoardForm className="justify-content-center mt-3" setBoards={setBoards} user={user}/>
          </div>
        }
      </section>

      <div className="card-container" id="board-cards">
        {boards.map((boardInfo) => (
          <BoardCard
            key={boardInfo.firebaseKey}
            firebaseKey={boardInfo.firebaseKey}
            imageUrl={boardInfo.imageUrl}
            title={boardInfo.title}
            user={user}
            setBoards={setBoards}
          />
        ))}
      </div>
      <div>
      <h1>Boards</h1>
    </div>
    </>
  );
}

BoardsView.propTypes = {
  boards: PropTypes.array.isRequired,
  setBoards: PropTypes.func.isRequired,
  user: PropTypes.any
};

export default BoardsView;
