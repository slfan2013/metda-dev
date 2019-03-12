import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProjectBasedComponent } from './project-based/project-based.component';
import { InAndOutComponent } from './in-and-out/in-and-out.component';
import { AutoAnalysisComponent } from './auto-analysis/auto-analysis.component';

export const MetdaRoutes: Routes = [

    {
        path: '',
        children: [{
            path: 'home',
            component: HomeComponent
        },{
            path: 'auto-analysis',
            component: AutoAnalysisComponent
        },{
            path: 'project-based',
            component: ProjectBasedComponent
        },{
            path: 'in-and-out',
            component: InAndOutComponent
        }]
    }
];
