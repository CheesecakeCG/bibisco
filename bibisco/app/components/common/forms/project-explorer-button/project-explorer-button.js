/*
 * Copyright (C) 2014-2018 Andrea Feccomandi
 *
 * Licensed under the terms of GNU GPL License;
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY.
 * See the GNU General Public License for more details.
 *
 */
angular.
  module('bibiscoApp').
  component('projectexplorerbutton', {
    templateUrl: 'components/common/forms/project-explorer-button/project-explorer-button.html',
    controller: ProjectExplorerButtonController,
    bindings: {
      showprojectexplorer: '=',
      visible: '<'
    }
  });

function ProjectExplorerButtonController() {

  var self = this;

  self.toggleProjectExplorer = function () {
    self.showprojectexplorer = !self.showprojectexplorer;
  };

}
