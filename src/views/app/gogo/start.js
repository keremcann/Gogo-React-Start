import React, { useEffect, useState } from 'react';
import { Card, Row } from 'reactstrap';
import IntlMessages from '../../../helpers/IntlMessages';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../../app/stores/store';
import ListPageListing from '../../../containers/pages/ListPageListing';
import classnames from 'classnames';

const Start = observer(({ match }) => {
  const { catalogStore } = useStore();
  const { data, loadCatalogs } = catalogStore;
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadCatalogs();
  }, [loadCatalogs])

  return <>
    <Row>
      <Colxx xxs="12">
        <Breadcrumb heading="menu.start" match={match} />
        <Separator className="mb-5" />
      </Colxx>
    </Row>
    <Row>
      <Colxx xxs="12" className="mb-4">
        <p>
          <IntlMessages id="menu.start" />
        </p>

        {data.map(item => {
          return <Row>

            <Colxx xxs="12" className="mb-3">
              <Card>
                <div className="pl-2 d-flex flex-grow-1 min-width-zero">
                  <div className="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center">
                    <p className="list-item-heading mb-1 truncate">
                      {item.catalogId}
                    </p>
                    <p className="mb-1 text-muted text-small w-15 w-sm-100">
                      {item.catalogName}
                    </p>
                    <p className="mb-1 text-muted text-small w-15 w-sm-100">
                      {item.success ? "success" : "failed"}
                    </p>
                  </div>
                </div>
              </Card>
            </Colxx>

          </Row>
        })}
      </Colxx>
    </Row>

    {/* <ListPageListing
      items={data}
      displayMode={undefined}
      selectedItems={undefined}
      onCheckItem={undefined}
      currentPage={1}
      totalPage={10}
      onContextMenuClick={undefined}
      onContextMenu={undefined}
      onChangePage={undefined}
    /> */}

  </>
});

export default Start;