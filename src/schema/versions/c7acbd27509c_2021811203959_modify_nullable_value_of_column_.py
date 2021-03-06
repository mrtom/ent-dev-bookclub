# Code generated by github.com/lolopinto/ent/ent, DO NOT edit.

"""modify nullable value of column reputation from True to False

Revision ID: c7acbd27509c
Revises: 02f42c52f80a
Create Date: 2021-08-11 20:39:59.103259+00:00

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql


# revision identifiers, used by Alembic.
revision = 'c7acbd27509c'
down_revision = '02f42c52f80a'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('users', 'reputation',
                    existing_type=sa.INTEGER(),
                    nullable=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('users', 'reputation',
                    existing_type=sa.INTEGER(),
                    nullable=True)
    # ### end Alembic commands ###
