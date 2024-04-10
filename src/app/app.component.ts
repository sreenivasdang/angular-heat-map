import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  heatmapData = [
    { values: [{ value: 5, color: '#b2d34a'  }, { value: 10, color: '#ffc20e' }, { value: 15, color: '#f58220' }, { value: 20, color: '#f15b40' }, { value: 25, color: '#f15b40' }] },
    { values: [{ value: 4, color: '#b2d34a' }, { value: 8, color: '#ffc20e' }, { value: 12, color: '#ffc20e' }, { value: 16, color: '#f15b40' }, { value: 20, color: '#f15b40' }] },
    { values: [{ value: 3, color: '#62bb46' }, { value: 6, color: '#b2d34a' }, { value: 9, color: '#ffc20e' }, { value: 12, color: '#ffc20e' }, { value: 15, color: '#f58220' }] },
    { values: [{ value: 2, color: '#62bb46' }, { value: 4, color: '#62bb46' }, { value: 6, color: '#b2d34a' }, { value: 8, color: '#ffc20e' }, { value: 10, color: '#ffc20e' }] },
    { values: [{ value: 1, color: '#62bb46' }, { value: 2, color: '#62bb46' }, { value: 3, color: '#62bb46' }, { value: 4, color: '#b2d34a' }, { value: 5, color: '#b2d34a' }] }
  ];

  rowNames = ['Catastrophic (5)', 'Significant (4)', 'Moderate (3)', 'Low (2)', 'Negligible (1)'];
  columnNames = ['Improbable (1)', 'Remote (2)', 'Occasional (3)', 'Probable (4)', 'Frequent (5)'];
}
