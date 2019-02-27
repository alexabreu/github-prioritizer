import React, { Component, MouseEvent }  from 'react';
import { List } from '@material-ui/core';

import TokenItem from './TokenItem';

export interface TokenListProps {
  onSelectToken: (e: MouseEvent<HTMLElement>, id: Token['id']) => void;
  onDeleteToken: (e: MouseEvent<HTMLElement>, id: Token['id']) => void;
  tokens: Token[];
  selectedToken: Token | undefined;
}
 
class TokenList extends Component<TokenListProps> {
  render() { 
    const { tokens, selectedToken, onSelectToken, onDeleteToken } = this.props;

    return (  
      <List>
        {
          tokens.map((token) => (
            <TokenItem
              key={token.id}
              isSelected={!!selectedToken && selectedToken.id === token.id}
              token={token}
              onSelect={onSelectToken}
              onDelete={onDeleteToken}/>
          ))
        }
      </List>
    );
  }
}
 
export default TokenList;
