import { Text, View } from 'react-native';
import ModalDialog from '../../shared/components/ModalDialog';
import { fireEvent,render, screen } from '@testing-library/react-native';
import { useState } from 'react';

jest.useFakeTimers()
jest.spyOn(global, 'setTimeout')
describe('Modal Dialog', () => {
  test('Successfully render', () => {
    render(
      <ModalDialog visible>
        <Text>Dummy Modal</Text>
      </ModalDialog>
    );
    expect(screen.getByText(/Dummy/)).toBeTruthy();
  });

  test('Successfully auto close', () => {
    const ModalTestHelper = ()=> {
        const [modalVisible, setModalVisible] = useState(true)
        return (
            <View>
                <ModalDialog visible={modalVisible} onClose={()=>setModalVisible(false)}>
                    <Text>Dummy Modal</Text>
                </ModalDialog>
            </View>
        )
    }
    render(<ModalTestHelper/>);
    const viewPressable = screen.getAllByA11yHint(/modal/i)
    expect(viewPressable).toBeTruthy()
    console.log(viewPressable);
    fireEvent(viewPressable, 'Press')
    // expect(screen.getByText(/Dummy/)).toBeTruthy();
  });
});
