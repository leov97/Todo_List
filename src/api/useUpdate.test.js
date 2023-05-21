import { renderHook } from '@testing-library/react';
import { useUpdate } from './useUpdate';

describe('useUpdate', () =>{
test( "se debe renderizar", () =>{
    renderHook(useUpdate)
}

)
})
