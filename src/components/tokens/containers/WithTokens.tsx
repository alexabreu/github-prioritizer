import { ComponentType } from 'react';
import { connect} from 'react-redux';
import TokenActions from '../../../state/tokens/actions';
import { Dispatch } from 'redux';

const mapStateToProps = (state: State) => {
  return {
    tokens: state.tokens.collection,
    selectedToken: state.tokens.selectedToken
  }
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {  
    addNewToken: (token: Token['token']) => dispatch(TokenActions.addNewToken(token)),
    selectToken: (id: Token['id']) => dispatch(TokenActions.selectToken(id)),
    deleteToken: (id: Token['id']) => dispatch(TokenActions.deleteToken(id)),
  }
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;
export type WithTokensProps = StateProps & DispatchProps;

export default <OwnProps extends any, OwnState = void>(Cmp: ComponentType<OwnProps>) =>
  connect<StateProps, DispatchProps, OwnProps>(
    mapStateToProps as any,
    mapDispatchToProps as any,
  )(Cmp);
