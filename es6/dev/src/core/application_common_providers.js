import { CONST_EXPR } from 'angular2/src/facade/lang';
import { Provider } from 'angular2/src/core/di';
import { APP_ID_RANDOM_PROVIDER } from './application_tokens';
import { APPLICATION_CORE_PROVIDERS } from './application_ref';
import { IterableDiffers, defaultIterableDiffers, KeyValueDiffers, defaultKeyValueDiffers } from './change_detection/change_detection';
import { ViewUtils } from "./linker/view_utils";
import { ComponentResolver, ReflectorComponentResolver } from './linker/component_resolver';
import { DynamicComponentLoader, DynamicComponentLoader_ } from './linker/dynamic_component_loader';
var __unused; // avoid unused import when Type union types are erased
/**
 * A default set of providers which should be included in any Angular
 * application, regardless of the platform it runs onto.
 */
export const APPLICATION_COMMON_PROVIDERS = CONST_EXPR([
    APPLICATION_CORE_PROVIDERS,
    new Provider(ComponentResolver, { useClass: ReflectorComponentResolver }),
    APP_ID_RANDOM_PROVIDER,
    ViewUtils,
    new Provider(IterableDiffers, { useValue: defaultIterableDiffers }),
    new Provider(KeyValueDiffers, { useValue: defaultKeyValueDiffers }),
    new Provider(DynamicComponentLoader, { useClass: DynamicComponentLoader_ })
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGljYXRpb25fY29tbW9uX3Byb3ZpZGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtUzFOQVE0azQudG1wL2FuZ3VsYXIyL3NyYy9jb3JlL2FwcGxpY2F0aW9uX2NvbW1vbl9wcm92aWRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ik9BQU8sRUFBTyxVQUFVLEVBQUMsTUFBTSwwQkFBMEI7T0FDbEQsRUFBVSxRQUFRLEVBQXdCLE1BQU0sc0JBQXNCO09BQ3RFLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSxzQkFBc0I7T0FDcEQsRUFBQywwQkFBMEIsRUFBQyxNQUFNLG1CQUFtQjtPQUNyRCxFQUNMLGVBQWUsRUFDZixzQkFBc0IsRUFDdEIsZUFBZSxFQUNmLHNCQUFzQixFQUN2QixNQUFNLHFDQUFxQztPQUNyQyxFQUFDLFNBQVMsRUFBQyxNQUFNLHFCQUFxQjtPQUN0QyxFQUFDLGlCQUFpQixFQUFFLDBCQUEwQixFQUFDLE1BQU0sNkJBQTZCO09BQ2xGLEVBQUMsc0JBQXNCLEVBQUUsdUJBQXVCLEVBQUMsTUFBTSxtQ0FBbUM7QUFFakcsSUFBSSxRQUFjLENBQUMsQ0FBRSx1REFBdUQ7QUFFNUU7OztHQUdHO0FBQ0gsT0FBTyxNQUFNLDRCQUE0QixHQUFtQyxVQUFVLENBQUM7SUFDckYsMEJBQTBCO0lBQzFCLElBQUksUUFBUSxDQUFDLGlCQUFpQixFQUFFLEVBQUMsUUFBUSxFQUFFLDBCQUEwQixFQUFDLENBQUM7SUFDdkUsc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxJQUFJLFFBQVEsQ0FBQyxlQUFlLEVBQUUsRUFBQyxRQUFRLEVBQUUsc0JBQXNCLEVBQUMsQ0FBQztJQUNqRSxJQUFJLFFBQVEsQ0FBQyxlQUFlLEVBQUUsRUFBQyxRQUFRLEVBQUUsc0JBQXNCLEVBQUMsQ0FBQztJQUNqRSxJQUFJLFFBQVEsQ0FBQyxzQkFBc0IsRUFBRSxFQUFDLFFBQVEsRUFBRSx1QkFBdUIsRUFBQyxDQUFDO0NBQzFFLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VHlwZSwgQ09OU1RfRVhQUn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcbmltcG9ydCB7cHJvdmlkZSwgUHJvdmlkZXIsIEluamVjdG9yLCBPcGFxdWVUb2tlbn0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvZGknO1xuaW1wb3J0IHtBUFBfSURfUkFORE9NX1BST1ZJREVSfSBmcm9tICcuL2FwcGxpY2F0aW9uX3Rva2Vucyc7XG5pbXBvcnQge0FQUExJQ0FUSU9OX0NPUkVfUFJPVklERVJTfSBmcm9tICcuL2FwcGxpY2F0aW9uX3JlZic7XG5pbXBvcnQge1xuICBJdGVyYWJsZURpZmZlcnMsXG4gIGRlZmF1bHRJdGVyYWJsZURpZmZlcnMsXG4gIEtleVZhbHVlRGlmZmVycyxcbiAgZGVmYXVsdEtleVZhbHVlRGlmZmVyc1xufSBmcm9tICcuL2NoYW5nZV9kZXRlY3Rpb24vY2hhbmdlX2RldGVjdGlvbic7XG5pbXBvcnQge1ZpZXdVdGlsc30gZnJvbSBcIi4vbGlua2VyL3ZpZXdfdXRpbHNcIjtcbmltcG9ydCB7Q29tcG9uZW50UmVzb2x2ZXIsIFJlZmxlY3RvckNvbXBvbmVudFJlc29sdmVyfSBmcm9tICcuL2xpbmtlci9jb21wb25lbnRfcmVzb2x2ZXInO1xuaW1wb3J0IHtEeW5hbWljQ29tcG9uZW50TG9hZGVyLCBEeW5hbWljQ29tcG9uZW50TG9hZGVyX30gZnJvbSAnLi9saW5rZXIvZHluYW1pY19jb21wb25lbnRfbG9hZGVyJztcblxudmFyIF9fdW51c2VkOiBUeXBlOyAgLy8gYXZvaWQgdW51c2VkIGltcG9ydCB3aGVuIFR5cGUgdW5pb24gdHlwZXMgYXJlIGVyYXNlZFxuXG4vKipcbiAqIEEgZGVmYXVsdCBzZXQgb2YgcHJvdmlkZXJzIHdoaWNoIHNob3VsZCBiZSBpbmNsdWRlZCBpbiBhbnkgQW5ndWxhclxuICogYXBwbGljYXRpb24sIHJlZ2FyZGxlc3Mgb2YgdGhlIHBsYXRmb3JtIGl0IHJ1bnMgb250by5cbiAqL1xuZXhwb3J0IGNvbnN0IEFQUExJQ0FUSU9OX0NPTU1PTl9QUk9WSURFUlM6IEFycmF5PFR5cGUgfCBQcm92aWRlciB8IGFueVtdPiA9IENPTlNUX0VYUFIoW1xuICBBUFBMSUNBVElPTl9DT1JFX1BST1ZJREVSUyxcbiAgbmV3IFByb3ZpZGVyKENvbXBvbmVudFJlc29sdmVyLCB7dXNlQ2xhc3M6IFJlZmxlY3RvckNvbXBvbmVudFJlc29sdmVyfSksXG4gIEFQUF9JRF9SQU5ET01fUFJPVklERVIsXG4gIFZpZXdVdGlscyxcbiAgbmV3IFByb3ZpZGVyKEl0ZXJhYmxlRGlmZmVycywge3VzZVZhbHVlOiBkZWZhdWx0SXRlcmFibGVEaWZmZXJzfSksXG4gIG5ldyBQcm92aWRlcihLZXlWYWx1ZURpZmZlcnMsIHt1c2VWYWx1ZTogZGVmYXVsdEtleVZhbHVlRGlmZmVyc30pLFxuICBuZXcgUHJvdmlkZXIoRHluYW1pY0NvbXBvbmVudExvYWRlciwge3VzZUNsYXNzOiBEeW5hbWljQ29tcG9uZW50TG9hZGVyX30pXG5dKTsiXX0=