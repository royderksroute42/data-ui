import { svgLabel } from '../src';

describe('svgLabel', () => {
  it('should define a baseLabel', () => {
    expect(svgLabel.baseLabel).toBeDefined();
  });

  it('should define a baseTickLabel', () => {
    expect(svgLabel.baseTickLabel).toBeDefined();
  });

  it('should define tick labels for all orientations', () => {
    expect(svgLabel.tickLabels).toBeDefined();
    expect(svgLabel.tickLabels.top).toBeDefined();
    expect(svgLabel.tickLabels.right).toBeDefined();
    expect(svgLabel.tickLabels.bottom).toBeDefined();
    expect(svgLabel.tickLabels.left).toBeDefined();
  });
});
