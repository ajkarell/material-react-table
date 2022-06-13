import React, { FC } from 'react';
import { Box } from '@mui/material';
import { MRT_FullScreenToggleButton } from '../buttons/MRT_FullScreenToggleButton';
import { MRT_ShowHideColumnsButton } from '../buttons/MRT_ShowHideColumnsButton';
import { MRT_ToggleDensePaddingButton } from '../buttons/MRT_ToggleDensePaddingButton';
import { MRT_ToggleFiltersButton } from '../buttons/MRT_ToggleFiltersButton';
import { MRT_ToggleGlobalFilterButton } from '../buttons/MRT_ToggleGlobalFilterButton';
import { MRT_TableInstance } from '..';
import { MRT_SearchTextField } from '../inputs/MRT_SearchTextField';

interface Props {
  instance: MRT_TableInstance;
}

export const MRT_ToolbarInternalButtons: FC<Props> = ({ instance }) => {
  const {
    options: {
      enableColumnFilters,
      enableDensePaddingToggle,
      enableFilters,
      enableFullScreenToggle,
      enableGlobalFilter,
      enableHiding,
      positionGlobalFilter,
      renderToolbarInternalActions,
    },
  } = instance;

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        zIndex: 3,
      }}
    >
      {renderToolbarInternalActions?.({
        MRT_FullScreenToggleButton,
        MRT_ShowHideColumnsButton,
        MRT_ToggleDensePaddingButton,
        MRT_ToggleFiltersButton,
        MRT_ToggleGlobalFilterButton,
        instance,
      }) ?? (
        <>
          {enableGlobalFilter && positionGlobalFilter === 'right' && (
            <MRT_SearchTextField instance={instance} />
          )}
          {enableFilters && enableGlobalFilter && (
            <MRT_ToggleGlobalFilterButton instance={instance} />
          )}
          {enableFilters && enableColumnFilters && (
            <MRT_ToggleFiltersButton instance={instance} />
          )}
          {enableHiding && <MRT_ShowHideColumnsButton instance={instance} />}
          {enableDensePaddingToggle && (
            <MRT_ToggleDensePaddingButton instance={instance} />
          )}
          {enableFullScreenToggle && (
            <MRT_FullScreenToggleButton instance={instance} />
          )}
        </>
      )}
    </Box>
  );
};
