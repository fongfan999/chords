import React from 'react';
import { shallow } from 'enzyme';

import ChordEditor from './ChordEditor';

describe('<ChordEditor />', () => {
  it('renders an editor area', () => {
    const editor = shallow(<ChordEditor song={{chordpro: ""}} />);
    expect(editor.find('textarea').length).toEqual(1);
  });

  it('renders an output area', () => {
    const editor = shallow(<ChordEditor song={{chordpro: ""}} />);
    expect(editor.find('div.chord-output').length).toEqual(1);
  });

  it('renders the chord chart output at the first time', () => {
    const editor = shallow(<ChordEditor song={{chordpro: "Type some lyrics here"}} />);
    const expectedOutput =
      '<table>' +
      '<tr><td class="chord"></td></tr>' +
      '<tr><td class="lyrics">Type some lyrics here&nbsp;</td></tr>' +
      '</table>';

    const realOutput = editor.find('div.chord-output').html();
    expect(realOutput.indexOf(expectedOutput) > -1).toEqual(true);
  });

  it('renders the chord chart output', () => {
    const editor = shallow(<ChordEditor song={{chordpro: "[B]New [Am]Lyric" }} />);
    const expectedOutput =
      '<table>' +
      '<tr><td class="chord">B</td><td class="chord">Am</td></tr>' +
      '<tr><td class="lyrics">New&nbsp;</td><td class="lyrics">Lyric&nbsp;</td></tr>' +
      '</table>';

    const realOutput = editor.find('div.chord-output').html();
    expect(realOutput.indexOf(expectedOutput) > -1).toEqual(true);
  });

  it('calls updateSong when the textarea changes', () => {
    var theSong;
    const update = (song) => {
      theSong = song;
    }
    const editor = shallow(<ChordEditor song={{chordpro: "[B]New [Am]Lyric" }} updateSong={update} />);

    editor.find('textarea').simulate('change', { target: { value: "[B]New [Am]Lyric " } });

    expect(theSong).toEqual({ chordpro: "[B]New [Am]Lyric " });
  });
});
