import { HexColorPicker } from "react-colorful";
import styled from "styled-components";
import { useSnapshot } from "valtio";
import { spaceNames } from "../../helpers";
import { state } from "./Model";

const Container = styled.div`
  display: block;
  flex: 1;
  h1 {
    text-align: left;
  }
`;

export default function Picker() {
  const snap = useSnapshot(state);
  return (
    <Container shots={snap.obj.current}>
      <HexColorPicker
        className="picker"
        color={snap.obj.items[snap.obj.current]}
        onChange={(color) => (state.obj.items[snap.obj.current] = color)}
      />
      <h1>{spaceNames(snap.obj.current)}</h1>
    </Container>
  );
}
