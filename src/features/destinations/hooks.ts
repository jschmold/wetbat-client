import { useSelector } from 'react-redux';
import { IAppState } from '../../store';
import { IDestinationState } from './reducer';

export function useDestinationState() {
  return useSelector<IAppState, IDestinationState>((a) => a.destinations);
}

export function useAllDestinations() {
  const state = useDestinationState();
  return Object.values(state.entities);
}
