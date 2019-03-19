import React from 'react';
import ActorDsc from './ActorDsc';
import Actors from './Actors';
import { Route } from 'react-router-dom';
import { ActorsData } from '../data/data';

const ActorCnt = (props) => {
  let actorUrl = ActorsData.map((actor) => {
    return (
      <Route path={`/actors/${actor.url}`} render={() => <ActorDsc name={ actor.name } img={ actor.img_src } dsc={ actor.dsc }/>} />
    );
  });

  return (
    <React.Fragment>
      <Route exact path="/actors/" render={() => <Actors title="Best Actors"/>}/>
      { actorUrl }
    </React.Fragment>
  );
};

export default ActorCnt;